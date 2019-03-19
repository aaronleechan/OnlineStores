const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type User{
        _id: ID!
        email: String!
        password: String
    }

    type Business{
        _id: ID!
        type: String
        name: String!
        address: String
        owner: String!
    }

    type UserauthData{
        userId: ID!
        token: String!
        tokenExpiration: Int!
    }

    input UserInput{
        email: String!
        password: String!
    }

    input BusinessInput{
        name: String!
        type: String
        address: String
        owner: String!
    }

    type RootQuery{
        businesses: [Business!]!
        loginuser(email: String!,password: String!): UserauthData!
    }

    type RootMutation{
        createuser (userInput: UserInput): User
        createbusiness (businessInput: BusinessInput): Business
    }

    schema{
        query: RootQuery
        mutation: RootMutation
    }
`);