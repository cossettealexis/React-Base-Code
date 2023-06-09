import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { logger } from 'redux-logger';
import throttle from 'lodash/throttle';
import createSagaMiddleware from 'redux-saga';
import { PERSISTED_STATE_KEY } from './config/settings';
import { all } from 'redux-saga/effects';

//Modules imports
import Demo from './views/containers/Demo/state';
import Login from './views/containers/Login/state';
import Error404 from './views/containers/Errors/404';
import NestedReducer from './views/containers/Demo/NestedDemo/state';
import Employee from './views/containers/Employee/state';
import FunctionalComponent from './views/containers/FunctionalComponent/state';

//Store methods
const loadState = () => {
    try {
        const serializedState = localStorage.getItem(PERSISTED_STATE_KEY);
        return null === serializedState ? undefined : JSON.parse(serializedState);
    } catch (e) { return undefined; }
};

const saveState = (state) => {
    try {
        localStorage.setItem(PERSISTED_STATE_KEY, JSON.stringify(state));
    } catch (e) { }
};


//Module Reducers
const rootReducer = combineReducers({
    demo: Demo.reducer,
    auth: Login.reducer,
    nested: NestedReducer,
    emp: Employee.reducer
});

//Module Routes
export const rootRoutes = [
    ...Login.routes,
    ...Demo.routes,
    ...Employee.routes,
    ...FunctionalComponent.routes,
    { component: Error404 }
]

//Module sagas
function* rootSaga() {
    yield all([
        //Insert module sagas
    ])
}

const persistedState = loadState();
const sagaMiddleware = createSagaMiddleware()

const middleware = applyMiddleware(
    thunkMiddleware,
    logger,
    sagaMiddleware
);

const store = createStore(
    rootReducer,
    persistedState,
    middleware
);


export default function configureStore() {
    store.subscribe(throttle(() => {
        saveState(store.getState());
    }), 1000);

    sagaMiddleware.run(rootSaga)

    return store;
};
