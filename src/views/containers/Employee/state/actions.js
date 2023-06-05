import * as types from "./types";
    
export const updateState = (value) => ({
    type: types.UPDATE_STATE,    // dispatch definition
    payload: value               // data passed to action
});

