const createError = require("http-errors");
const {User} = require('../models');

module.exports.createUser = async (req, res, next)=>{
    try {
       const {body, file} = req;
        if(file){
          body.imgPath = file.filename;
        }
       const user = await User.create(body);
       if(!user){
        next(createError(400, 'try again)'));
       }
       user.password = undefined;
       res.status(201).send({data:user});
    } catch (error) {
        next(error);
    }
};



// module.exports.createUser = async (req, res, next)=>{
//     try {
        
//     } catch (error) {
//         next(error)
//     }
// }