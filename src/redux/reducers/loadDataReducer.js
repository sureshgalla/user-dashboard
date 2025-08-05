import { initialState } from "../initialState";
import * as types from "../types/types";

const loadDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.DELETE_USER:
      return {
        ...state,
        data: state.data.filter((user, i) => {
          if (action.payload !== i + 1) {
            return user;
          }
          return null;
        }),
      };
    case types.ADD_USER:
      return { ...state, data: [...state.data, action.payload] };
    case types.EDIT_USER:
      return {
        ...state,
        data: state.data.map((user) => {
          if (user.id === action.payload.id) {
            return { ...user, ...action.payload };
          }
          return user;
        }),
      };
    default:
      return state;
  }
};

export default loadDataReducer;
