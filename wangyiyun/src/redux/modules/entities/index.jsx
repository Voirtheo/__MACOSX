import {combineReducers} from "redux"
import products from "./products"
import shops from "./shop"
import orders from "./order"
import comments from "./comments"

const rootReducer = combineReducers({
    products,
    shops,
    orders,
    comments
})