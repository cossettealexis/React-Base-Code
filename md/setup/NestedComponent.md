## Nested Components (including redux store)
There are times when a module could have multiple pages / tabs and each page will have it's own store to manage.

`NOTE:` Even though there are child components, the routes of each page should still be defined under the module's `routes.js` file.
### Structure
```
/Containers
   /NestedParent
       /NestedChildOne
           /state
            ...child 1 ducks structure
           -ChildComponent1.js
        /NestedChildTwo
           /state
            ... child 2 ducks structure
           -ChildComponent2.js
       /state
        ... parent ducks structure
        -MainContainer.js
        -OtherComponent.js
```

#### Example Child State:
##### `NestedChildOne (reducer.js)`
```javascript
const defaultState = {
    child1Key: "nested child 1 value"
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        default: return state;
    }
};
```
##### `NestedChildOne (index.js)`
```javascript
import reducer from "./reducers";
export default reducer;
```

##### `NestedChildTwo (reducer.js)`
```javascript
const defaultState = {
    child2Key: "nested child 2 value"
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        default: return state;
    }
};
```
##### `NestedChildTwo (index.js)`
```javascript
import reducer from "./reducers";
export default reducer;
```

#### Combining Child States to Parent State:

```javascript
import reducer from "./reducers";
import childReducer1 from '../NestedChildOne/state'; // reducer file from Nested Child One
import childReducer2 from '../NestedChildTwo/state'; // reducer file from Nested Child Two
import { combineReducers } from "redux";   // import combineReducers

//Combine the different states into one parent reducer variable
const parentReducer = combineReducers({
    root: reducer,   //define the parent
    nestedChild1: childReducer1,
    nestedChild2: childReducer2
})

export default parentReducer;

```

#### Register the module store under `./src/app.modules.js` file:
```javascript
import NestedReducer from './views/containers/NestedParents/state';
...
//Module Reducers
const rootReducer = combineReducers({
    auth: Login.reducer,
    nested: NestedReducer  //add the reducer here and define the key you want for the nested module store
});
...
```

#### Example output of Redux Store:
```
nested:{
    nestedChild1:{
        child1Key: "nested child 1 value"
    },
    nestedChild2:{
        child1Key: "nested child 2 value"
    },
    root:{
        nestedParentState: "Sample parent state"
    }
}
```