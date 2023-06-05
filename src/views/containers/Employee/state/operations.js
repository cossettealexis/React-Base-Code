
import ApiService from "../../../../utils/apiService";
import * as Path from './apiRoutes';

//Import the action creators
import * as Actions from "./actions";


//EMPLOYEE
export const getListEmployee = () => (dispatch) => {
    ApiService.get(Path.ROOT)
        .then((response) => {
            if (response) {
                dispatch(Actions.updateState(response.data));
            }
            return response.data;

        })
        .catch((error) => {
            console.error(error);
        })
}

export const getEmployeeById = (id) => (dispatch) => {
    return ApiService.get(Path.ROOT + "/" + id)
        .then((response) => {
            if (response.data) {
                return response.data;
            }
        })
        .catch((error) => {
            console.error(error);
        })
}

export const addEmployee = (values) => (dispatch) => {
    ApiService.post(Path.ROOT + "/", values)
        .then((response) => {
            if (response) {
                dispatch(getListEmployee());
            }
        })
        .catch((error) => {
            console.error(error);
        })
}

export const updateEmployee = (values, id) => (dispatch) => {
    ApiService.patch(Path.ROOT + "/" + id, values)
        .then(() => {
            dispatch(getListEmployee());
        })
}

export const deleteEmployee = (id) => (dispatch) => {
    ApiService.delete(Path.ROOT + "/" + id)
        .then((response) => {
            if (response) {
                dispatch(getListEmployee());
            }
        })
        .catch((error) => {
            console.error(error);
        })
}