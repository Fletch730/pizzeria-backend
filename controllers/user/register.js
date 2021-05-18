const User=require("../../model/userModel");

module.exports=(async(req,res)=>{
    //console.log(req)
   
    try{
        let user=new User({
            name:req.body.data.name,
            email:req.body.data.email,
            phone:req.body.data.phone,
            city:req.body.data.city,
            pincode:req.body.data.pincode,
            landmark:req.body.data.landmark,
            houseNo:req.body.data.houseNo
        })
        user.password=await user.hashPassword(req.body.data.password)
        let createdUser=await user.save();
        res.status(200).json({
            msg:"New USer Craeted",
            data:createdUser
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            error:err
        })
    }
})