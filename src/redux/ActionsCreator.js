import * as ActionTypes from "./ActionTypes";

export const addComment = (camsitesId, rating, text, author) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: {
    campsiteId: camsitesId,
    rating: rating,
    author: author,
    text: text,
  },
});
