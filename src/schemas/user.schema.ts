export const userSchema = `#graphql
scalar Date

type User {
    name: String
    email: String!
    password: String!
    createdOn: Date
    updatedOn: Date
}

type Query {
    getUsers(filter:UserFilter):[User]
}

input UserInput {
    name: String
    email: String!
    password: String!
    createdOn: Date
    updatedOn: Date
}

input UserFilter {
    name:String
}

type Mutation {
    addUser(input: UserInput!): User
}
`