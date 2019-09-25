import axios from "axios";

import { POST_LOGIN } from "./types";

export const postLogin = () => dispatch => {
  axios
    .post("")
    .then(res => {
      dispatch({
        type: POST_LOGIN,
        payload: res.data
      });
    })
    .catch(error => console.log(error.message));
};
