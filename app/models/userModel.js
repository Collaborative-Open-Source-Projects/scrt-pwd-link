import clientPromise from "@/app/lib/mongodb";

export async function addUserModel(doc){
	try{
		const client = await clientPromise;
	
		const userColl = client.db("scrt-pwd-data").collection("users");
		
		const result = await userColl.insertOne(doc);
		
		return result;
	}
	catch(err){
		console.log("Error in file userModel in function addUserModel.");
		throw err;
	}
}

export async function getUserModel(query){
	try{
		const client = await clientPromise;

		const userColl = client.db("scrt-pwd-data").collection("users");

		const user = await userColl.findOne(query);

		return user;
	}
	catch(err){
		console.log("Error in file userModel in function getUserModel.");
		throw err;
	}
}
