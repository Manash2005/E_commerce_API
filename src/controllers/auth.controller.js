const userModel = require("../models/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

async function registerUser(req,res){

    //destructure the req
    const {name, email, password, role='user'} = req.body

    //Check if user with same email exists
    const userAlreadyExists = await userModel.findOne({email});
    if(userAlreadyExists){
        return res.status(409).json({
            message : "Unauthorised"
        })
    }

    //Hash password
    const hash = await bcrypt.hash(password, 10);

    //Create a user
    const user = await userModel.create({
        name,
        email,
        password : hash,
        role 
    })

    //Create token
    const token = jwt.sign({
        id : user._id,
        role : user.role 
    }, process.env.JWT_SECRET)

    //Strore the token in cookie
    res.cookie("token", token)

    //Final response of user creation
    console.log(`User created successfully by name ${name}`.yellow)
    res.status(201).json({
        message : "User create successfully",
        user : {
            name,
            email,
            role
        }
    })
}

async function loginUser(req,res){

    const {email, password} = req.body

    const user = await userModel.findOne({
        email
    })

    if(!user) {
        return res.status(401).json({
            message : "Invalid Credentials"
        })
    }

     //compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password)

    if(!isPasswordValid){
        return res.status(401).json({message : "Invalid credentials"})
    }


    const token = jwt.sign({
        id : user._id,
        role : user.role
    }, process.env.JWT_SECRET)

    res.cookie("token", token)

    console.log(`${user.name} logged in successfully`)
    res.status(201).json({
        message : "User logged in successfully"
    })

}

module.exports = {registerUser, loginUser}