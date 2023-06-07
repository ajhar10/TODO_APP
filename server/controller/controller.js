const Userdb=require('../model/model');

//Create a new User

exports.create=(req,res)=>{
//validate request
if(!req.body){
    res.status(400).send({message:"Content Can't be empty"});
    return;
}
//create user
const user=new Userdb({
    name:req.body.name,
    email:req.body.email,
    gender:req.body.gender,
    status:req.body.status
})


//Save User In Database
user
    .save(user)
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
    res.status(500).send({
        mess:err.message || "Operation failed",
    })
})}


//Retrive and Return All Users/a single user
exports.find=(req,res)=>{

}


//update a new identified user by the user id
exports.update=(req,res)=>{

}

//Delete a user with tshe specified id in the request
exports.remove=(req,res)=>{

}