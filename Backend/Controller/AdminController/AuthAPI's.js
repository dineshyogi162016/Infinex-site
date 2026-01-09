const nodemailer = require("nodemailer")
const GenerateOTP = require("otp-generator")

const secretKey = process.env.JWT_SECRET_KEY || "MySecretKey";
// const saltRound = process.env.SALT_ROUND || 10
const saltRound = 10

const SignupSchema = require("../../Modals/SignupSchema")

const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const OTPSchema = require("../../Modals/OTPSchema");

const Signup = async (req, res) => {
    try{
        const registerUsers = await SignupSchema.find() ;
        let SignupInstance = req.body ;
        
        
        let userName = SignupInstance.name
        let userEmail = SignupInstance.email
        let userPassword = SignupInstance.password 
        
        const userExist = registerUsers.find(e => e.email === userEmail)

        if(userExist){
            res.json({
                status : 409,
                success: false,
                message: "User already exist"
            })
        }else{
            const hashPassword = await bcrypt.hash(userPassword, saltRound )
            
            SignupInstance = {
                name : userName,
                email : userEmail,
                password : hashPassword,
                role : "editor",
                status : false
            }
            
            const sigupDetails = SignupSchema(SignupInstance)
            const response = await sigupDetails.save()

            if(response){  
               res.json({
                status : 201,
                success: true,
                message: "User registered successfully"
               })
            }else{
                res.json({
                    status : 500,
                    success: false,
                    message: "Registered failed"
                })
            }
        }
    }catch(error){
        res.json({
            status : 500,
            success : false,
            message : "Something went wrong"
        })
    }

    
}

const SendOTP = async (req, res) => {
    let LoginInstance = req.body

    userEmail = LoginInstance.email
    userPassword = LoginInstance.password

    const UserExist = await SignupSchema.findOne({email : userEmail})

    if(!UserExist){
        res.json({
            success : false,
            status : 400,
            message : "User not resistered"
        })
    }else{
        bcrypt.compare(userPassword, UserExist.password , (err, result) => {
            if(!result){
                res.json({
                    success : false,
                    status : 400,
                    message : "Wrong password"
                })
            }else{
                try {

                    // const senderMail = 'jorge.jones30@ethereal.email'
                    // const senderMailPass = 'GKbfgGkZQ3PR8KkCP7'
                    
                    const senderMail = process.env.SENDER_MAIL || ''
                    const senderMailPass = process.env.SENDER_MAIL_PASS || ''

                    const transporter = nodemailer.createTransport({
                        // host : 'smtp.ethereal.email',
                        host : 'smtp.gmail.com',
                        port : 587,
                        secure : false,
                        auth : {
                            user : senderMail,
                            pass : senderMailPass
                        }
                    })

                    const OTP = GenerateOTP.generate(4, {upperCaseAlphabets: false, lowerCaseAlphabets: false, specialChars: false})
                    
                    const mailOptions = {
                        from : senderMail,
                        to : userEmail,
                        subject : 'OTP for Secure Login',
                        html : `<table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    width="100%"
                                    style="font-family: Arial, sans-serif; background-color: #f4f4f4;"
                                    >
                                    <tr>
                                        <td align="center" style="padding: 20px 0 30px 0;">
                                        <table
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            width="600"
                                            style="border: 1px solid #cccccc; border-radius: 8px; background-color: #ffffff; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);"
                                        >
                                            <tr>
                                            <td
                                                align="center"
                                                style="padding: 30px 30px 20px 30px; border-bottom: 1px solid #eeeeee;"
                                            >
                                                <h1 style="margin: 0; font-size: 24px; color: #333333;">
                                                One-Time Password (OTP)
                                                </h1>
                                            </td>
                                            </tr>

                                            <tr>
                                            <td
                                                style="padding: 30px 30px 40px 30px; color: #555555; font-size: 16px; line-height: 1.6;"
                                            >
                                                <p style="margin: 0 0 20px 0;">
                                                Hi ${UserExist.name},
                                                </p>

                                                <p style="margin: 0 0 20px 0;">
                                                Your One-Time Password (OTP) for logging in is:
                                                </p>

                                                <table
                                                border="0"
                                                cellpadding="0"
                                                cellspacing="0"
                                                width="100%"
                                                style="margin-bottom: 30px;"
                                                >
                                                <tr>
                                                    <td align="center">
                                                    <div
                                                        style="display: inline-block; padding: 15px 30px; background-color: #f0f8ff; border: 2px solid #007bff; border-radius: 6px;"
                                                    >
                                                        <span
                                                        style="font-size: 32px; font-weight: bold; color: #007bff; letter-spacing: 5px;"
                                                        >
                                                        &#128272; [  ${OTP}  ]
                                                        </span>
                                                    </div>
                                                    </td>
                                                </tr>
                                                </table>

                                                <p style="margin: 0 0 15px 0; text-align: center; color: #666666;">
                                                This code will expire in **[X] minutes**.
                                                </p>

                                                <p style="margin: 0 0 30px 0; font-weight: bold; color: #cc0000;">
                                                For your security, please **do not share this code with anyone**.
                                                </p>

                                                <p style="margin: 0 0 20px 0;">
                                                If you did not request this login, please ignore this email or
                                                contact our support team immediately.
                                                </p>
                                            </td>
                                            </tr>

                                            <tr>
                                            <td
                                                align="center"
                                                style="padding: 20px 30px 30px 30px; background-color: #f9f9f9; border-top: 1px solid #eeeeee; border-radius: 0 0 8px 8px;"
                                            >
                                                <p style="margin: 0 0 10px 0; font-size: 14px; color: #999999;">
                                                Stay secure,
                                                </p>
                                                <p style="margin: 0 0 5px 0; font-size: 16px; font-weight: bold; color: #333333;">
                                                [InfinexTechnologies]
                                                </p>
                                                <p style="margin: 0; font-size: 14px; color: #007bff;">
                                                <a
                                                    href="mailto:[Support Email]"
                                                    style="color: #007bff; text-decoration: none;"
                                                    >[ info@infinextechnologies.com ]</a
                                                >
                                                |
                                                <a
                                                    href="tel:[+918955100493 ]"
                                                    style="color: #007bff; text-decoration: none;"
                                                    >[ +918955100493 ]</a
                                                >
                                                </p>
                                            </td>
                                            </tr>
                                        </table>
                                        </td>
                                </tr>
                                </table>`
                    }

                    transporter.sendMail(mailOptions, (error, info)=>{
                        if(error){
                            res.json({
                                status : 400,
                                success : false,
                                message : 'Mail not sending'
                            })
                            
                            console.log("Email not sent", error)
                        }else{
                            try {
                                const OTP_Instance = {
                                    user_identifier : userEmail ,
                                    otp_code : OTP,
                                    created_at : Date.now(),
                                }
                                // const OTP_response = await OTPSchema.Save(OTP_Instance)

                                const OTP_response = OTPSchema.create(OTP_Instance);

                                if(OTP_response){
                                    res.json(
                                        {
                                            status : 200,
                                            success : true,
                                            message : 'Email has been sent'
                                        }
                                    )
                                }else{
                                    res.json(
                                        {
                                            status : 400,
                                            success : false,
                                            message : 'OTP has been failed'
                                        }
                                    )
                                }
                            } catch (error) {
                                res.json(
                                        {
                                            status : 400,
                                            success : false,
                                            message : 'Error in OTP Send'
                                        }
                                    )
                            }
                           
                        }
                    })

                } catch (error) {
                    console.log("Error in Send OTP : ", error)
                }
            }
        })
    }
}

const Login = async (req, res) => {
    let LoginInstance = req.body

    userEmail = LoginInstance.userData 
    OTP = Number(LoginInstance.myotp_code)
    // OTP = parseInt(LoginInstance.userData, 10);

    const UserExist = await OTPSchema.findOne({user_identifier : userEmail})
    const DB_otp_code = parseInt(UserExist.otp_code, 10);

    if(!UserExist){
        res.json({
            success : false,
            status : 400,
            message : "User not resistered"
        })
    }else{
        if(DB_otp_code !== OTP ){
             res.json({
                status : 400,
                success : false,
                message : "OTP not valid"
            })
            
            
        }else{
               
            const payload = {email : userEmail}
            const jwtToken = jwt.sign(payload, secretKey, {expiresIn :  30 * 60})

            res.cookie("InfinexToken", jwtToken,{
                httpOnly : true,
                secure : false,
                sameSite: "Lax", // Prevent CSRF,
                path: "/",
                maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
            }).json({
                status : 201,
                success : true,
                message : "Login successful"
            })

        }
    }
}


const LogOut = async (req, res) => {
    res.clearCookie("InfinexToken", {
        httpOnly: true,
        secure: false,
        sameSite: "Lax",
        path: "/"
    });
    res.json({ 
        status : 201,
        success : true,
        message: "LogOut success"
    });
}


const CheckLogin = async (req, res) => {
    const Token = req.cookies.InfinexToken;

    if(!Token){
        res.json({
            status : 401,
            success : false,
            message : "Logged out"
        })
    }
    else{
        jwt.verify(Token, secretKey, (err, valid) =>{
            if(err){
                res.clearCookie("InfinexToken", {
                    httpOnly: true,
                    sameSite: "Lax",
                    secure: false,
                    path: "/"
                });

                res.json({
                    status : 401,
                    success : false,
                    message : "Token Expired"
                })
            }else{
                res.json({
                    status : 200,
                    success : true,
                    message : "Logged in"
                })
            }
        })
    }
}

module.exports = {Signup, Login, LogOut, CheckLogin, SendOTP}