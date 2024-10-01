import { NextResponse } from "next/server";

export async function GET(){
    try{NextResponse.json({status:true})}
    catch(error){NextResponse.json({status:false})}
}