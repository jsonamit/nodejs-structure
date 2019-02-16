const mongoose =require('mongoose');
const User=require('../../models/userModel/user.model');
const Address=require('../../models/userModel/address.model');
const ObjectId = mongoose.Types.ObjectId;
module.exports.adduser = (req,res) => {
    var response={};
    try    {

        if(req.body.name && req.body.email)
        {
            var user={name:req.body.name,email:req.body.email};
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
module.exports.addaddress = (req,res) => {
    var response={};
    // try    {

        if(req.body.address && req.body.city)
        {
            var address={user_id:req.body.user_id,address:req.body.address,city:req.body.city};
            Address.create(address,(error,data)=>{
                if(error){
                    response.message= "Registration failed";
                    response.status= 404;
                    res.send(response);
                }
                else
                {
                    response.message= "Address successfully added";
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
    // }
    // catch(error)
    // {
    //     response.message= "server error";
    //     response.status= 500;
    //     response.data= error;
    //     res.send(response);
    // }

}
module.exports.getuser = (req,res) => {
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
module.exports.getuserById = (req,res) => {
    res.send('getting user by id');
}

