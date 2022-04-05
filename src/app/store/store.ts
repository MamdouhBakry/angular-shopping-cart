import { ActionReducerMap } from "@ngrx/store";
import { Product } from "../Models/product";
import { cartReducer } from "./reducers/cart.reducer";
import { orderReducers } from "./reducers/order.reducer";
import { productReducer } from "./reducers/product.reducer";

export interface StoreInterface {
    product: Product[];
    cart: any;
    orders: any;
}

export const reducers: ActionReducerMap<StoreInterface> = {
    product: productReducer,
    cart: cartReducer,
    orders: orderReducers
}
