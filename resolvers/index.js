const authUserResolver = require('./authuser')
const BusinessResolver = require('./business')

const rootResolver = {
    ...authUserResolver,
    ...BusinessResolver
};

module.exports = rootResolver