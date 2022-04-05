import { Product } from "src/app/Models/product";
import { CLEAR_ORDER, CREATE_ORDER, FAILD, LOAD, SUCCESS } from "../actions/order.action";


export function orderReducers(state = {}, action: any) {
    switch (action.type) {
        case SUCCESS:
            return {
                ...state,
                orders: action.payload
            }
        case FAILD:
            return state
        case CREATE_ORDER:
            localStorage.removeItem("cartItems");
            return {
                order: action.payload
            }
        case CLEAR_ORDER:
            return { order: false }
        default:
            return state;
    }
}