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
    Userdb.find()
    .then(user=>{
        res.send(user);
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message || "Error Occured while retrieving user Information"
        })
    })

}


//update a new identified user by the user id
exports.update=(req,res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update user with ${id}. Maybe user not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update user information"})
        })

}

//Delete a user with tshe specified id in the request
exports.remove=(req,res)=>{
    const id = req.params.id;

    Userdb.findByIdAndDelete(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message:"User not found"});
            }else{
                res.send({message:"User deleted"})
            }
        })
        .catch(err=>{
            res.status(500).send({message:"Could not delete user with id:"+id})
        })

}