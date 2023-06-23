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
    axios.get('http://localhost:5000/api/users',{params:{id:req.query.id}})
    .then((response)=>{
        res.render('update_user',{user:response.data})
    }).catch((err)=>{res.send(err)});
}
