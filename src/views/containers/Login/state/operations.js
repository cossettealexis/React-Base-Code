import * as Actions from "./actions";
import * as Path from './apiRoutes';
import clearAuth from "../../../../utils/clearAuth";
import ApiService from "../../../../utils/apiService";

const loginUser = (email, password) => (dispatch) =>{
    return ApiService.get(Path.LOGIN_USER+`?email=${email}&password=${password}`)
    .then((response)=>{
        if(0 < response.data.length){
            dispatch(Actions.setUserAuth(response.data[0], true));
        }
        return response.data;
    })
    .catch((error)=>{
        console.error(error);
    })
};

const logoutUser = () => (dispatch) =>{
    dispatch(Actions.setUserAuth([], false));
    clearAuth();
};

export{
    loginUser, 
    logoutUser
};
