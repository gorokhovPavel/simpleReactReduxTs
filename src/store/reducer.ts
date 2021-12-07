import {
    IReducerState,
    SUCCESSFUL_LOGIN,
    UNSUCCESSFUL_LOGIN,
    LOG_OUT,
    STORE_NEWS,
    IActionTypes
} from './types'


const initialState:IReducerState = {
    authenticated: false,
    loginError: false,
    news: []
}

const reducer = (state=initialState, action: IActionTypes): IReducerState => {
    switch(action.type){
        case SUCCESSFUL_LOGIN:
            return {
                ...state,
                authenticated: true,
                loginError: false
            };
        case UNSUCCESSFUL_LOGIN:
            return {
                ...state,
                authenticated: false,
                loginError: true
            }
        case LOG_OUT:
            return {
                ...state,
                authenticated: false
            }
        case STORE_NEWS:
            return {
                ...state,
                news: action.payload
            }
        default:
            return state;
    }
}
export default reducer;
