"use strict";

const home = (req, res) =>{
    // 기능 - root
    res.render("home/index")
};

const login = (req, res)=>{
    res.render("home/login");
};



module.exports = {
    home,
    login
};