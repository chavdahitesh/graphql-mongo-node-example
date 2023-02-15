const { gql } = require("apollo-server");

module.exports = gql`
  type Article {
    _id: ID!
    title: String!
    body: String!
    createdAt: String!
  }

  input ArticleInput {
    title: String!
    body: String!
  }

  type Query {
    articles: [Article!]
  }

  type Mutation {
    createArticle(article: ArticleInput): Article
    createArticle(user: ArticleInput): Article
    deleteArticle(id: ID!): Article
  }
`;
