import mongoose from "mongoose";

//lot of time when third party libraries are loaded there dotenv fails to load 
//so tackle it we use this 
import dotenv from "dotenv"
dotenv.config()
//export a function that connects to db
const db=()=>{

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("connected to mongoDB");
})
.catch((err)=>{
    console.log("Error connecting to mongoDB")
})
}

// only one so default
export default db;