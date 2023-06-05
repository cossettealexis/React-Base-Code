import reducer from "./reducers";
import childReducer1 from '../NestedChild1/state';
import childReducer2 from '../NestedChild2/state';
import { combineReducers } from "redux";

//Nested reducer level 1
const parentReducer = combineReducers({
    root: reducer,
    nestedChild1: childReducer1,
    nestedChild2: childReducer2
})

export default parentReducer;
