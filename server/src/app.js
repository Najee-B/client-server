const express=require("express");
const app=express();
app.use(express.json());

const AuthRoute=require("./routes/auth.js");
app.use("/",AuthRoute);
const HomeRoute=require("./routes/home.js");
app.use("/",HomeRoute);
app.listen(5000,()=>
{
    console.log("Server listening at port 5000")
}
);

