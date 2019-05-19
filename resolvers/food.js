const FoodModel = require('../models/food');

module.exports = {
    createfood: async (args,req) =>{
        try{
            const food = new FoodModel({
                name: args.foodInput.name,
                price: args.foodInput.price,
                about: args.foodInput.about
            });
            const result = await food.save();
            return result
        }catch(err){
            throw err;
        }
    },
    food: async (args) =>{
        try{
            const food = await FoodModel.find();
            return food.map(result=>{
                return {
                    ...result._doc
                }
            })
        }catch(err){
            throw err;
        }
    }
}