export const setUser = payload => {
    return {
        type: 'SET_USER',
        payload
    }
}

export const logout = () => {
    return {
        type: 'LOGOUT'
    }
}

export const loading = (loading: boolean = false) => {
    return {
        type: 'SET_LOADING',
        payload: loading
    }
}