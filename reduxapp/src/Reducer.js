
export const reducer = (state = {key:1}, action) => {
    console.log(state.key+1)
    switch (action.type) {
        case 'INCREMENT':
            return {key:state.key+1};
        case 'DECREMENT':
            return state.key - 1;
        default:
            return state;
    }
}