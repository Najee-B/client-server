const express=require("express");
const router=express.Router();
router.get("/login",(req,res)=>
{
    res.send(" This is login get")
});
router.post("/login",(req,res)=>
{
    console.log(req.body);
    res.send(" This is login post")
});
router.get("/register",(req,res)=>
{
    res.send(" This is register get")
});
router.post("/register",(req,res)=>
{
    console.log(req.body);
    res.send("This is register post")
});
module.exports=router;