import { gql } from "@apollo/client";

export const GET_ARTICLES_LIST = gql`
  query getArticles($title: String) {
    articles(title: $title) {
      author
      description
      title
      urlToImage
      formattedDate
      content
      read
      url
      id
      source {
        name
      }
    }
    articlesUnreadCount
  }
`;
