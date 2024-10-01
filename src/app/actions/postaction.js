
import ConnectDB from "../../../config/database/page"
import USER from "../../../models/user"

export async function getpost(){
    try{
   
        const res=await ConnectDB();
     console.log("RES",res)
        return "MAjid MEhboob is my name"
    }
    catch(error){return{error}}
}