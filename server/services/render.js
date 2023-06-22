const express = require('express');
const axios = require('axios');

exports.homeRoutes = (req,res)=>{
    axios.get('http://localhost:5000/api/users')
    .then(response=>{
        console.log(response);
        res.render('index',{users:response.data});
    })
    
}

exports.addUserRoutes = (req,res)=>{
    res.render('add_user')
}

exports.updateUserRoutes = (req,res)=>{
    res.render('update_user')
}
