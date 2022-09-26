import { gql } from "@apollo/client";

export const UPDATE_READ_STATUS = gql`
  mutation updateReadStatus($title: String!) {
    updateReadStatus(title: $title)
  }
`;
