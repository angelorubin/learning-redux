import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {
  articles: [
    {
      id: 1,
      title: "my title 01"
    },
    {
      id: 2,
      title: "my title 02"
    }
  ]
};

const rootReducer = (state = initialState, action) => {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  return state;
};

export default rootReducer;
