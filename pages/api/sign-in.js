import jwt from "jsonwebtoken";
import {getUserModel} from "@/app/models/userModel";

export default function signIn(req, res){

	handleRequest({req, res});
}


async function handleRequest(param){
	const {req, res} = param;

	//get user
	let user = null;
	try{
		const query = {
			$or: [
				{username: req.body.nameOrEmail, password: req.body.password},
				{emailAddress: req.body.nameOrEmail, password: req.body.password},
			],
		}

		user = await getUserModel(query);

		if(!user){
			return res.status(400).json({success: false, msg: "No user has been found:"});
		}
	}
	catch(err){
		console.log(err);
		return res.status(500).json({success: false, msg: "Internal server error."});
	}

	//create token
	let token = null;
	try{
		token = await jwt.sign(user, process.env.JWT_SECRET);
	}
	catch(err){
		console.log(err);
		return res.status(500).json({success: false, msg: "Internal server error."});
	}

	res.setHeader("Authorization", `Bearer ${token}`);
	res.status(200).json({success: true, msg: "Authorization header set.", token});
}
