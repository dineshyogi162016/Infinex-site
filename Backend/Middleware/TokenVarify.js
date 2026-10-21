const jwt = require("jsonwebtoken")

const secretKey = process.env.JWT_SECRET_KEY || "MySecretKey";
const {LogOut} = require("../Controller/AdminController/AuthAPI's")


const TokenVarify = (req, res, next) => {
    const Token = req.cookies.InfinexToken;

    console.log("Token : getttt : ", Token )

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
                const isProduction = process.env.NODE_ENV === "production" || !!process.env.VERCEL;
                res.clearCookie("InfinexToken", {
                    httpOnly: true,
                    sameSite: isProduction ? "none" : "lax",
                    secure: isProduction,
                    path: "/"
                });
                
                res.json({
                    status : 401,
                    success : false,
                    message : "Token Expired"
                })
                
            }else{
                next()
            }
        })
    }
}

module.exports = TokenVarify