const initialState = {
    numbers: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NUMBER':
            return {
                ...state,
                numbers: [...state.numbers, action.payload],
            };
        case 'CLEAR_LIST':
            return {
                ...state,
                numbers: [],
            };
        default:
            return state;
    }
};

export default reducer;