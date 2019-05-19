const authUserResolver = require('./authuser')
const BusinessResolver = require('./business')
const FoodResolver = require('./food')

const rootResolver = {
    ...authUserResolver,
    ...BusinessResolver,
    ...FoodResolver
};

module.exports = rootResolver