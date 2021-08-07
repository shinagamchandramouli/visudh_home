const validator = require('validator');

const validateLogin = async (req,res,next)=> {

    const {email,password} = req.body;
    const isMobilePhone = (email) => {
        let regex = /^\d{10}$/;
        return regex.test(email);
    }
    if(!validator.isEmail(email) && !isMobilePhone(email)) return res.status(401).json({msg: "Not a valid email"});
    if(password.length < 6) return res.status(401).json({msg: "Too short password"});

    // return res.status(401).json({msg: "field are validated"});
    next();
}

module.exports = validateLogin;