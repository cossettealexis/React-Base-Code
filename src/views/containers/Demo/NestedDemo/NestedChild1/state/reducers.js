const defaultState = {
    child1Key: "nested child 1 value"
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        default: return state;
    }
};