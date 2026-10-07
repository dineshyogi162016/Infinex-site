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
                        },

                        tls: {
                            rejectUnauthorized: false
                        }
                    })

                    const OTP = GenerateOTP.generate(4, {upperCaseAlphabets: false, lowerCaseAlphabets: false, specialChars: false})
                    
                    const mailOptions = {
                        from : senderMail,
                        to : userEmail,
                        subject : 'OTP for Secure Login',
                        html : `<table
                                    role="presentation"
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    width="100%"
                                    style="
                                        width: 100%;
                                        margin: 0;
                                        padding: 0;
                                        background-color: #f5f7fa;
                                        font-family: Arial, Helvetica, sans-serif;
                                    "
                                    >
                                    <tr>
                                        <td align="center" style="padding: 32px 16px;">
                                        
                                        <!-- Main Container -->
                                        <table
                                            role="presentation"
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            width="100%"
                                            style="
                                            width: 100%;
                                            max-width: 560px;
                                            background-color: #ffffff;
                                            border: 1px solid #e6e9ee;
                                            border-radius: 12px;
                                            "
                                        >

                                            <!-- Brand -->
                                            <tr>
                                            <td
                                                align="center"
                                                style="
                                                padding: 28px 32px 18px 32px;
                                                border-bottom: 1px solid #eef0f3;
                                                "
                                            >
                                                <p
                                                style="
                                                    margin: 0;
                                                    font-size: 18px;
                                                    line-height: 24px;
                                                    font-weight: 700;
                                                    color: #111827;
                                                "
                                                >
                                                Infinex Technologies
                                                </p>
                                            </td>
                                            </tr>

                                            <!-- Main Content -->
                                            <tr>
                                            <td style="padding: 32px;">

                                                <!-- Title -->
                                                <h1
                                                style="
                                                    margin: 0 0 10px 0;
                                                    font-size: 24px;
                                                    line-height: 32px;
                                                    font-weight: 700;
                                                    text-align: center;
                                                    color: #111827;
                                                "
                                                >
                                                Verify your login
                                                </h1>

                                                <p
                                                style="
                                                    margin: 0 0 28px 0;
                                                    font-size: 15px;
                                                    line-height: 24px;
                                                    text-align: center;
                                                    color: #6b7280;
                                                "
                                                >
                                                Hi ${UserExist.name}, use the verification code below to securely
                                                continue your login.
                                                </p>

                                                <!-- OTP Box -->
                                                <table
                                                role="presentation"
                                                border="0"
                                                cellpadding="0"
                                                cellspacing="0"
                                                width="100%"
                                                style="margin: 0 0 16px 0;"
                                                >
                                                <tr>
                                                    <td align="center">
                                                    
                                                    <table
                                                        role="presentation"
                                                        border="0"
                                                        cellpadding="0"
                                                        cellspacing="0"
                                                        style="
                                                        background-color: #f3f7ff;
                                                        border: 1px solid #d9e5ff;
                                                        border-radius: 10px;
                                                        "
                                                    >
                                                        <tr>
                                                        <td
                                                            align="center"
                                                            style="
                                                            padding: 18px 30px;
                                                            font-size: 32px;
                                                            line-height: 40px;
                                                            font-weight: 700;
                                                            letter-spacing: 8px;
                                                            color: #2563eb;
                                                            white-space: nowrap;
                                                            "
                                                        >
                                                            ${OTP}
                                                        </td>
                                                        </tr>
                                                    </table>

                                                    </td>
                                                </tr>
                                                </table>

                                                <!-- Expiry -->
                                                <p
                                                style="
                                                    margin: 0 0 26px 0;
                                                    font-size: 13px;
                                                    line-height: 20px;
                                                    text-align: center;
                                                    color: #6b7280;
                                                "
                                                >
                                                This verification code expires in
                                                <strong style="color: #374151;">[X] minutes</strong>.
                                                </p>

                                                <!-- Security Notice -->
                                                <table
                                                role="presentation"
                                                border="0"
                                                cellpadding="0"
                                                cellspacing="0"
                                                width="100%"
                                                style="
                                                    width: 100%;
                                                    margin-bottom: 24px;
                                                    background-color: #fff8eb;
                                                    border: 1px solid #fde5b4;
                                                    border-radius: 8px;
                                                "
                                                >
                                                <tr>
                                                    <td
                                                    style="
                                                        padding: 14px 16px;
                                                        font-size: 13px;
                                                        line-height: 20px;
                                                        color: #7a5517;
                                                    "
                                                    >
                                                    <strong>Security reminder:</strong>
                                                    Never share this verification code with anyone.
                                                    </td>
                                                </tr>
                                                </table>

                                                <!-- Ignore Message -->
                                                <p
                                                style="
                                                    margin: 0;
                                                    font-size: 14px;
                                                    line-height: 22px;
                                                    text-align: center;
                                                    color: #6b7280;
                                                "
                                                >
                                                Didn't request this login? You can safely ignore this email.
                                                </p>

                                            </td>
                                            </tr>

                                            <!-- Footer -->
                                            <tr>
                                            <td
                                                align="center"
                                                style="
                                                padding: 22px 24px;
                                                background-color: #fafbfc;
                                                border-top: 1px solid #eef0f3;
                                                border-radius: 0 0 12px 12px;
                                                "
                                            >
                                                <p
                                                style="
                                                    margin: 0 0 6px 0;
                                                    font-size: 13px;
                                                    line-height: 20px;
                                                    font-weight: 600;
                                                    color: #374151;
                                                "
                                                >
                                                Infinex Technologies
                                                </p>

                                                <p
                                                style="
                                                    margin: 0;
                                                    font-size: 12px;
                                                    line-height: 20px;
                                                    color: #9ca3af;
                                                "
                                                >
                                                <a
                                                    href="mailto:info@infinextechnologies.com"
                                                    style="
                                                    color: #2563eb;
                                                    text-decoration: none;
                                                    "
                                                >
                                                    info@infinextechnologies.com
                                                </a>

                                                &nbsp;&nbsp;•&nbsp;&nbsp;

                                                <a
                                                    href="tel:+918955100493"
                                                    style="
                                                    color: #2563eb;
                                                    text-decoration: none;
                                                    "
                                                >
                                                    +91 89551 00493
                                                </a>
                                                </p>
                                            </td>
                                            </tr>

                                        </table>

                                        <!-- Bottom Note -->
                                        <p
                                            style="
                                            max-width: 520px;
                                            margin: 16px auto 0 auto;
                                            font-size: 11px;
                                            line-height: 18px;
                                            text-align: center;
                                            color: #9ca3af;
                                            "
                                        >
                                            This is an automated security email. Please do not reply directly to
                                            this message.
                                        </p>

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
            // const jwtToken = jwt.sign(payload, secretKey, {expiresIn :  30 * 60}) // with expiry time
            const jwtToken = jwt.sign(payload, secretKey )

            res.cookie("InfinexToken", jwtToken,{
                httpOnly : true,
                secure : false,
                sameSite: "Lax", // Prevent CSRF,
                path: "/"
                // maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
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
        res.status(401).json({
            success: false,
            message: "Logged out"
        });
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

                res.status(401).json({
                    success: false,
                    message: "Logged out"
                });
            }else{
                res.status(200).json({
                    success: true,
                    message: "Logged in"
                });
            }
        })
    }
}

module.exports = {Signup, Login, LogOut, CheckLogin, SendOTP}