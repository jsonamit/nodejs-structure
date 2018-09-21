
//const user=require('../../models/user.model');


module.exports.getuser = (req,res) => {
    res.send('this is user route');
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

