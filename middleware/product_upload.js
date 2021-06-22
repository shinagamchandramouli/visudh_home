const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null,path.join(__dirname,'..','product_images'));
    },

    filename: (req,file,cb) => {
        var name = file.originalname.split('.')[0];
        cb(null,`${name}_${Date.now()}${path.extname(file.originalname)}`);
    }

});

const upload = multer({
    storage: storage
})

module.exports = upload;