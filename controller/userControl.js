const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const validator = require('validator');

require("dotenv").config();

const userControl = {
    register: async (req,res) => {
        try {
            
            const {name,email,password,contact_no,aadhar_no, category} = req.body;

            const doUserExist = await User.findOne({email});
            const doContactExist = await User.findOne({contact_no});
            const doAadharExist = await User.findOne({aadhar_no});
            if( doUserExist ) {
                return res.status(409).json({msg: 'Email already exists'});
            }
            else if( doContactExist ) {
                return res.status(409).json({msg: 'Phone No: already exists'});
            }
            else if( doAadharExist ) {
                return res.status(409).json({msg: 'Aadhar No: already exists'});
            }

            const hashPassword = await bcrypt.hash(password, 10);

            const new_user = new User({
                name,
                email,
                password: hashPassword,
                contact_no,
                aadhar_no,
                category
            });

            const saved_user = await new_user.save();
            
            return res.status(200).json({
                jwt: jwt.sign({
                    email: saved_user.email,
                    _id : saved_user._id
                }, process.env.JWT_SECRET_KEY),
                user: saved_user
            });

        } catch (err) {
            return res.status(500).json({msg: err});
        }
    },

    login: async (req,res) => {
        try {

            const {email, password} = req.body;

            
            const userData = await (validator.isEmail(email) ? User.findOne({email}) : User.findOne({contact: email}) );

            if(!userData) {
                res.status(200).json({msg: "Email doesn't exist"});
            }

            const isPasswordMatched = await bcrypt.compare(password, userData.password );

            if(!isPasswordMatched) {
                return res.status(401).json({msg: "Wrong password"});
            }

            return res.status(200).json({
                jwt: jwt.sign({
                    email: userData.email,
                    _id : userData._id
                }, process.env.JWT_SECRET_KEY),
                user: userData
            });

        } catch (err) {
            return res.status(500).json({msg: err});
        }
    },

    info: async (req,res)=> {
        const _id = req.body._id;

        try {
            const userInfo = await User.findOne({_id});
            if(userInfo) {
                res.status(200).json({user: userInfo});
            } else {
                res.status(400).json({msg: 'User doesn\'t exist'});
            }
        } catch (err) {
            res.status(500).json({msg: err});
        }
    }
};

module.exports = userControl;
