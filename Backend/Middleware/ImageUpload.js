const multer = require("multer")

const Storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, 'Uploads/')
    },
    filename : (req, file, cb) => {
        const uniqueName = Date.now()+"-"+file.originalname;
        cb(null, uniqueName)
    }

})


let upload = multer({
    storage: Storage,
    // limits : {fileSize : 1024*1024*4}
})


module.exports = upload