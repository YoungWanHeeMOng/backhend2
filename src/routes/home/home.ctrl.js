"use strict";

const User = require("../../models/User");
const UserStorage = require("../../models/userStroage");

const output  = {
    
    home : (req, res) =>{
        // 기능 - root
        res.render("home/index")
    },
    login : (req, res)=>{
        res.render("home/login");
    },
    register : (req, res) => {
        res.render("home/register");
    },
};

const process = {
    login: async (req, res) => {
        const user = new User(req.body);
        const response =await user.login();
        return res.json(response);
    },
    register : async (req, res) => {
        const user = new User(req.body);
        const response =await user.register();
        return res.json(response);
    },
};



module.exports = {
    output,
    process,
};