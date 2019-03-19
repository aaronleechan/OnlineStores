const BusinessModel = require('../models/business');

module.exports = {
    createbusiness: async (args,req) =>{
        try{
            const business = new BusinessModel({
                name: args.businessInput.name,
                type: 'resturant',
                address: args.businessInput.address,
                owner: 'aaron chan'
            });
            const result = await business.save();
            return result
        }catch(err){
            throw err;
        }
    },
    businesses: async (args) =>{
        try{
            const business = await BusinessModel.find();
            return business.map(result=>{
                return {
                    ...result._doc
                }
            })
        }catch(err){
            throw err;
        }
    }
}