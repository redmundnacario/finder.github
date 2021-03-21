import {
    GET_USERS,
    CLEAR_USERS,
    GET_USER,
    GET_USERREPOS,
    SET_LOADING
} from '../types';

const GithubReducer = (state, action) => {
    switch (action.type){
        case GET_USERS:
            return {
                ...state,
                users : action.payload,
                isLoading: false
            }
        case SET_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case CLEAR_USERS:
            return {
                ...state,
                users: []
            }
        case GET_USER:
            return {
                ...state,
                user: action.payload,
                isLoading: false
            }
        case GET_USERREPOS:
            return {
                ...state,
                userRepos: action.payload,
                isLoading: false
            }
        default :
            return state;
    }
}

export default GithubReducer