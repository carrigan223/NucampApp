import * as ActionTypes from "./ActionTypes";
import { CAMPSITES } from "../shared/campsites";

export const addComment = (campsitesId, rating, text, author) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: {
    campsiteId: campsitesId,
    rating: rating,
    author: author,
    text: text,
  },
});

export const fetchCampsites = () => (dispatch) => {
  dispatch(campsiteLoading());

  setTimeout(() => {
    dispatch(addCampsites(CAMPSITES));
  }, 2000);
};

export const campsiteLoading = () => ({
  type: ActionTypes.CAMPSITES_LOADING,
});

export const campsitesFailed = (errMess) => ({
  type: ActionTypes.CAMPSITES_FAILED,
  payload: errMess,
});

export const addCampsites = (campsites) => ({
  type: ActionTypes.ADD_CAMPSITES,
  payload: campsites,
});
