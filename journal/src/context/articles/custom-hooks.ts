import { useMutation } from "@apollo/client";
import { BAD_REQUEST_URL } from "./constants";
import { UPDATE_READ_STATUS } from "./articles-mutations";

export const useReadStatusUpdate = (title: String) => {
  const [updateReadStatus, { data, error }] = useMutation(UPDATE_READ_STATUS, { variables: { title } });
  if (error) { window.open(BAD_REQUEST_URL, '_self') }
  return {updateReadStatus, data}
}