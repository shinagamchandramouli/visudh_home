const validator = require('validator');

const validateRegistration = (req,res,next)=> {

    const {name,email,password,contact_no} = req.body;
    if(name.length < 5) return res.status(401).json({msg: "Name is too short"});
    if(!validator.isEmail(email)) return res.status(401).json({msg: "Not a valid email"});
    if(password.length < 6) return res.status(401).json({msg: "Too short password"});
    if( !(/^\d{10}$/.test(contact_no)) ) return res.status(401).json({msg: "Invalid Contact no:"});

    next();
}

module.exports = validateRegistration;