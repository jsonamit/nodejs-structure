
//const user=require('../../models/user.model');


module.exports.getuser = (req,res) => {
    var response={};
    try    {

        if(req){

            response.message= "getting user successfully";
            response.status= 200;
            res.send(response);
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
    // user.find((err,doc)=>{
    //     if(!err)
    //     {
    //         res.send('this is user route');
    //     }
    //     else {
    //         console.log('error with connection db'+JSON.stringify(err));
    //     }
    // });
}
module.exports.getuserById = (req,res) => {
    res.send('getting user by id');
}

