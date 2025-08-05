import * as types from "../types/types.js";

export const deleteUser = (id) => {
  return { type: types.DELETE_USER, payload: id };
};

export const addUser = (data) => {
  console.log("datainAction", data);
  return { type: types.ADD_USER, payload: data };
};

export const editUser = (data) => {
  return { type: types.EDIT_USER, payload: data };
};
