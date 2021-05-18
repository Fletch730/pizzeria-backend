const mongoose=require("mongoose");
var uniqueValidator=require('mongoose-unique-validator');
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const schema=mongoose.Schema;
const userSchema=new schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    pincode:{
        type:Number,
        required:true
    },
    landmark:{
        type:String,
        required:true
    },
    houseNo:{
        type:Number,
        required:false
    },
},{
    timestamps:true,
});

userSchema.methods.hashPassword = async(password)=>{
    return await bcrypt.hashSync(password,10);
}
userSchema.methods.compareUserPassword= async(inputtedPassword,hashedPassword)=>{
    return await bcrypt.compare(inputtedPassword, hashedPassword);
}
userSchema.methods.generateJwtToken = async (payload, secret, expires) => {
    return jwt.sign(payload, secret, expires)
}
module.exports = mongoose.model("User", userSchema);
userSchema.plugin(uniqueValidator, {
    message: '{PATH} Already in use'
});