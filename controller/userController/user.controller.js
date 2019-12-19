const mongoose =require('mongoose');
const User=require('../../models/userModel/user.model');
const ObjectId = mongoose.Types.ObjectId;



module.exports.getuser = (req,res) => {
    var response={};
    try    {

        
        User.find({},(error,data)=>{
                if(error){
                    response.message= "failed";
                    response.status= 404;
                    res.send(response);
                }
                else
                {
                    response.message= "successfully";
                    response.status= 200;
                    response.data= data;
                    res.send(response);
                }
            });

    }
    catch(error)
    {
        response.message= "server error";
        response.status= 500;
        response.data= error;
        res.send(response);
    }

}

module.exports.getuserAndaddess = (req,res) => {
    var response={};
    try    {
        //5c683e07680b0d18a8235323
        User.aggregate([
            {
                $match: {_id: ObjectId('5c683e07680b0d18a8235323')}

            },
            {
                $lookup:
                    {
                        from: "addresses",
                        localField: "_id",
                        foreignField: "user_id",
                        as: "address"
                    }
            }
        ]).exec((error,data)=>{
            if(error)
            {
                response.message= "server error";
                response.status= 201;
                response.data= error;
                res.send(response);
            }
            else
            {
                response.message= "getting user successfully";
                response.status= 200;
                response.data= data;
                res.send(response);
            }
        })

    }
    catch(error)
    {
        response.message= "server error";
        response.status= 500;
        response.data= error;
        res.send(response);
    }

}
module.exports.adduser = (req,res) => {
    var response={};
    try    {
            

        if(req.body.name && req.body.product && req.body.email)
        {
            
            var user={name:req.body.name,product:req.body.product,email:req.body.email};
            User.create(user,(error,data)=>{
                if(error){
                    response.message= "Registration failed";
                    response.status= 404;
                    res.send(response);
                }
                else
                {
                    response.message= "user successfully added";
                    response.status= 200;
                    res.send(response);
                }
            });

        }
        else
        {
            response.message= "some data missing";
            response.status= 404;
            res.send(response);
        }
    }
    catch(error)
    {
        response.message= "server error";
        response.status= 500;
        response.data= error;
        res.send(response);
    }

}
module.exports.deleteuser = (req,res) => {
    var response={};
        if(req.body.id)
        {
            User.deleteOne({_id:req.body.id},(error,data)=>{
                if(error){
                    response.message= "failed";
                    response.status= 404;
                    res.send(response);
                }
                else
                {
                    response.message= "Deleted successfully";
                    response.status= 200;
                    res.send(response);
                }
            });

        }
        else
        {
            response.message= "some data missing";
            response.status= 404;
            res.send(response);
        }

}

module.exports.getuserById = (req,res) => {
    var response={};
        if(req.body.id)
        {
            User.find({_id:req.body.id},(error,data)=>{
                if(error){
                    response.message= "failed";
                    response.status= 404;
                    res.send(response);
                }
                else
                {
                    response.message= "successfully";
                    response.status= 200;
                    response.data= data; 
                    res.send(response);
                }
            });

        }
        else
        {
            response.message= "some data missing";
            response.status= 404;
            res.send(response);
        }
}

module.exports.updateuser = (req,res) => {
    var response={};
        if(req.body.id,req.body.name)
        {
            console.log('update',req.body.id);
            var user={name:req.body.name,product:req.body.product,email:req.body.email};
            User.updateOne({_id:req.body.id},{$set:user},(error,data)=>{
                if(error){
                    response.message= "failed";
                    response.status= 404;
                    res.send(response);
                }
                else
                {
                    response.message= "successfully";
                    response.status= 200;
                    response.data= data; 
                    res.send(response);
                }
            });

        }
        else
        {
            response.message= "some data missing";
            response.status= 404;
            res.send(response);
        }
}

