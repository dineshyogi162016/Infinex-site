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
                next()
            }
        })
    }
}

module.exports = TokenVarify