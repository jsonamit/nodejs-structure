
const user=require('../models/user.model');


module.exports.getuser = (req,res) => {
    user.find((err,doc)=>{
        if(!err)
        {
            res.send(doc);
        }
        else {
            console.log('error with connection db'+JSON.stringify(err));
        }
    });
};

module.exports.register=(req,res)=> {
let response={};
    let users = new user(req.body);
    var User=new user(users);
    // var User= new user({
    //     username:req.body.username,
    //     email:req.body.email,
    //     city:req.body.city
    // });

    User.save((err,doc)=>{
        if(!err)
        {
            //response.status = 200;
            //response.msg = 'Student added successfully!';
            res.send(doc);

        }
        else {
            console.log('error with connection db'+JSON.stringify(err));
        }
    });

}