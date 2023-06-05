import * as types from "./types";

export const setUserAuth = ( data, authenticate ) => ({
    type: types.SET_USER_AUTH,
    payload: data,
    isAuthenticated: authenticate
});