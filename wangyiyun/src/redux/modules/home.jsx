import { get } from "../../utils/request"
import url from "../../utils/url"
export const types = {
    //获取猜你喜欢请求
    FETCH_LIKES_REQUEST: "HOME/FETCH_LIKES_REQUEST",
    //获取猜你喜欢请求
    FETCH_LIKES_SUCCESS: "HOME/FETCH_LIKES_SUCCESS",
    //获取猜你喜欢请求
    FETCH_LIKES_FAILURE: "HOME/FETCH_LIKES_FAILURE"
}

export const actions = {
    loadLikes: () => {
        return (dispatch, getState) => {
            dispatch(fetchLikesRequest())
            return get(url.getProductList(0, 10)).then(
                data => {
                    dispatch(fetchLikesSuccess(data))
                },
                error => {
                    dispatch(fetchLikesFailure(error))
                }
            )
        }
    }
}
const fetchLikesRequest = () => ({
    type: types.FETCH_LIKES_REQUEST
})
const fetchLikesSuccess = () => ({
    type: types.FETCH_LIKES_SUCCESS
})
const fetchLikesFailure = () => ({
    type: types.FETCH_LIKES_FAILURE
})

const reducer = (state = {}, action) => {
    switch (action.type) {
        case types.FETCH_LIKES_REQUEST:
        //123
        case types.FETCH_LIKES_SUCCESS:
        //
        case types.FETCH_LIKES_FAILURE:
        //
        default:
            return state

    }
    return state
}
export default reducer;