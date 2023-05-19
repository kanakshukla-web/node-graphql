export const bookSchema = `#graphql
scalar Date

type Book {
    title: String,
    author: String,
    createdOn: Date
    updatedOn: Date
},

type Query {
    getBooks:[Book]
}

input BookInput {
    title: String!,
    author: String,
    createdOn: Date
    updatedOn: Date
}

type Mutation {
    addBook(input: BookInput!): Book
}
`