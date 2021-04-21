const initialState = {
    user: {media: []}
}

const rootReducer = (state=initialState, action) => {
    switch(action.type){
        case 'SET_USER':
            return {...state, user: action.payload}
        case 'ADD_FAVORITE':
            return {...state, user: {...state.user, media: [...state.user.media, action.payload]}}
        default:
            return state
    }

}
export default rootReducer;