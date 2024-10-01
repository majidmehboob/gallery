import { Schema,model,models} from "mongoose";
const user=new Schema({
    msg:{
        type:String,
        required:true,
    }
},{timestamps:true})
const USER = model.user || model('User',user)
export default USER