const initialState = {
    user: null,
    loading: false
}

function session(state = initialState, action) {
    switch (action.type) {
        case 'SET_USER':
            return { ...state, user: action.payload }
        case 'LOGOUT':
            return { ...initialState }
        case 'SET_LOADING':
            return { ...state, loading: action.payload }
        default:
            return state;
    }
}

export default session