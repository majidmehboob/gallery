import { NextResponse } from "next/server";
import DBConnection from "@/database/page";
import USER from "@/models/user";
export const dynamic = "force-dynamic";
export async function POST(req) {
   const start = Date.now();
   await DBConnection();
   console.log("DB connection took", Date.now() - start, "ms");
  const { name, email, password, avatar } = await req.json();
  console.log(name,email,password,avatar)


  

  //-----------------------------if user already exist
  try {
const userCheckStart = Date.now();
const UserVerification = await USER.findOne({ email });
console.log("User check took", Date.now() - userCheckStart, "ms");
    if (UserVerification) {
      return NextResponse.json({success: false,message: "User Exit Already"});
    } else {
      const newUser = await USER.create({name, email,password,avatar});
      if (newUser) {
        return NextResponse.json({success: true,message: "User Added sucessfully"});
      }
    }
  } catch (error) {
    console.log("ERROR)))))((((((",error)
    return NextResponse.json({success: false,message: "Somthing Went Wrong",});
  }
}
