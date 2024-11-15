import { addUserModel, getUserModel } from "@/app/models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default function addUser(req, res) {
  const result = validateRequest(req);

  if (!result.success) {
    return res.json(result);
  }

  handleRequest({ req, res });
}

async function handleRequest(param) {
  const { req, res } = param;

  //check if user exists already
  try {
    const query = {
      $or: [
        { username: req.body.username },
        { emailAddress: req.body.emailAddress },
      ],
    };

    const result = await getUserModel(query);
    if (result) {
      res
        .status(400)
        .json({ success: false, msg: "Username or e-mail exists already" });
      return;
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, msg: "Internal server error." });
    return;
  }

  //add user to db
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const doc = {
      username: req.body.username,
      emailAddress: req.body.emailAddress,
      password: hashedPassword,
    };

    const result = await addUserModel(doc);
    let token = null;
    try {
      token = jwt.sign(
        {
          _id: result.insertedId,
          username: req.body.username,
          emailAddress: req.body.emailAddress,
          password: hashedPassword,
        },
        process.env.JWT_SECRET
      );
    } catch (err) {
      console.log(err);
      return res.status(200).json({
        success: true,
        msg: "User added to db but failed to create token.",
        token,
      });
    }
    return res
      .status(200)
      .json({ success: true, msg: "User has been added to db.", token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, msg: "Internal server error." });
    return;
  }
}

function validateRequest(req) {
  if (req.method !== "POST") {
    return { success: false, msg: "Only POST requests are allowed" };
  }

  if (!req.body.username || !req.body.emailAddress || !req.body.password) {
    return { success: false, msg: "Not all credentials have been provided." };
  }

  return { success: true };
}
