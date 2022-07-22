const User = require("../model/userModel")
const bcrypt = require("bcrypt")

module.exports.register = async (req,res,next) =>{
    try{
        const {username, email, password} = req.body;
        const usernameCheck = await User.findOne({username});
        const emailCheck = await User.findOne({username});
        console.log(req.body)
        if(usernameCheck)
            return res.json({msg: "Username already exist", status:false});
        if(emailCheck)
            return res.json({msg: "email already exist", status:false});
        
        const hashedPass = await bcrypt.hash(password,10);
        const user = await User.create({
            email,username,password:hashedPass
        })
        delete user.password;
        return res.json({status:true,user})

    }catch(err){
        console.log(err)
        next(err)
    }

}; 

module.exports.login = async(req,res,next)=>{
    try{
        const {username,password} = req.body;
        const hashedPass = await bcrypt.hash(password,10);
        const usernameCheck = await User.findOne({username});
        if(!usernameCheck){

            return res.json({msg: "username isn't exist",status:false})
            
        }
        console.log(usernameCheck)
        console.log(hashedPass)
        if(bcrypt.compareSync(hashedPass,usernameCheck.password)){
            return res.json({msg: "wrong password",status:false})
        }
        return res.json({status:true, usernameCheck})

    }catch(err){
        console.log(err)
        next(err)
    }
}

module.exports.getAllUsers = async(req,res,next)=>{
    try{    
        const user = await User.find({_id: {$ne: req.params.id}}.select([
            "email",
            "username",
            "_id",
        ]));
        return res.json(users)
    }catch(err){
        next(ex);
    }
}