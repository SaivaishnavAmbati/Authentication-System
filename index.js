import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "./utils/db.js";



//import all routes
import userRoutes from "./routes/user.routes.js"
dotenv.config()
const app = express();

//study about cors specially 
app.use(cors({
    origin: process.env.BASE_URL,
    credentials: true,
    methods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
}));

//this is for saying to accept json files
app.use(express.json())

//this is to accept urls encoded like http:localhost:3000/piyush%20garg in this %20 is the space
//which is called url encoder to accept that we use this 
app.use(express.urlencoded({extended:true}))

const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("cohort");
});

app.get("/hitesh", (req, res) => {
    console.log("hitesh");
  res.send("Hitesh sir");
  
});

app.get("/piyush", (req, res) => {
  res.send("Piyush sir");
});

//connect to db
db();
//user routes
app.use("/api/v1/users/",userRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
