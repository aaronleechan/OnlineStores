const UserModel = require('../models/user');


const user = async userId =>{
    try{
        const user = await UserModel.findById(userId)
        return{
            ...user._doc,
            _id: user.id,
        }
    }catch(error){
        throw error;
    }
}

exports.user = user