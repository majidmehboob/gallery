import { NextResponse } from "next/server";
import DBConnection from "@/database";
// import { hash } from "bcrypt";
import USER from "@/models/user";
// import Joi from "joi";

// const schema = Joi.object({
//   name: Joi.string().required(),
//   email: Joi.string().email().required(),
//   password: Joi.string().min(6).required(),
//   role: Joi.string().required(),
// });
export const dynamic = "force-dynamic";
export async function POST(req) {
  await DBConnection();
  const { name, email, password, avatar } = await req.json();


  //------------------------------for Error
  // const { error } = schema.validate({ name, email, password, role });
  // if (error) {
  //   return NextResponse.json({
  //     success: false,
  //     message: error.details[0].message,
  //   });
  // }
  //-----------------------------if user already exist

  try {
    const UserVerification = await USER.findOne({ email });
    if (UserVerification) {
      return NextResponse.json({
        success: false,
        message: "User Exit Already",
        data:UserVerification,
      });
    } else {
      // const hashPassword = await hash(password, 12);
      const newUser = await USER.create({
        name,
        email,
        password,
        avatar,
      });
      if (newUser) {
        return NextResponse.json({
          success: true,
          message: "User Added sucessfully",
          data: newUser,
        });
      }
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Somthing Went Wrong",
    });
  }
}
