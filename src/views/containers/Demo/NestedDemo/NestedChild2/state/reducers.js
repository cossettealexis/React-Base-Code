const defaultState = {
    child2Key: "nested child 2 value"
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        default: return state;
    }
};