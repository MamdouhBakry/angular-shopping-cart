import { Product } from "src/app/Models/product";
import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from "../actions/cart.actions";

export interface IcartItems {
    cartItems: Product[]
}
let initState = {
    cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')!) : []
}
export function cartReducer(state = initState, action: any) {
    switch (action.type) {
        case ADD_TO_CART:
            //console.log(action.payload)
            let cartItemsClone = [...action.cartItems];
            let cartItemsClone2 = [];
            let isProductExists = false;
            //console.log(cartItemsClone)
            for (let product of cartItemsClone) {
                if (product._id === action.payload._id) {
                    let quantity = product.qty + 1;
                    cartItemsClone2 = cartItemsClone.filter((p) => p._id != action.payload._id);
                    cartItemsClone2.push({ ...product, qty: quantity })
                    isProductExists = true;
                }
            }
            if (!isProductExists) {
                cartItemsClone.push({ ...action.payload, qty: 1 });
                cartItemsClone2 = [...cartItemsClone];
            }
            localStorage.setItem("cartItems", JSON.stringify(cartItemsClone));
            return {
                ...state,
                cartItems: cartItemsClone2
            };

        case REMOVE_FROM_CART:
            let RcartItemsClone = [...action.cartItems];
            console.log(RcartItemsClone)
            let updatedCartItems = RcartItemsClone.filter(p => p._id !== action.payload._id);
            localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
            return {
                ...state,
                cartItems: updatedCartItems
            };


        case CLEAR_CART:
            return {
                ...state,
                product: []
            }
        default:
            return state;
    }
}