
const initialState = {
    data: [],
    loaded: false,
    posted: false,
    selectedItem: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'get_lists':
            return { ...state, data: action.payload, loaded: true };
        case 'get_selectedItem':
            return { ...state, selectedItem: action.payload };
        case 'post_data':
            return { ...state, data: action.payload, posted: true };
        default:
            return state
    }
};
