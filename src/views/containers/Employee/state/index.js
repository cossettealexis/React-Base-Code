import reducer from "./reducers";
import routes from "../routes"
import * as empOperations from "./operations";
import * as empSelectors from "./selectors";
    
export {
    empOperations,
    empSelectors
};
    
export default {
    reducer,
    routes
};