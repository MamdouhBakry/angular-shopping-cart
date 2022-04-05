import { Product } from "src/app/Models/product";

export const ADD_TO_CART = "[cart]/add to cart";
export const REMOVE_FROM_CART = "[cart]/remove from cart";
export const CLEAR_CART = "[cart]/clear cart";

export class AddToCartAction {
    type: string = ADD_TO_CART;
    payload: Product;
    cartItems: Product[]
    constructor(payload: Product, cartItems: Product[]) {
        this.payload = payload;
        this.cartItems = cartItems;
    }
}
export class RemoveFromCartAction {
    type: string = REMOVE_FROM_CART;
    payload: Product;
    cartItems: Product[]
    constructor(payload: Product, cartItems: Product[]) {
        this.payload = payload;
        this.cartItems = cartItems;
    }
}
export class ClearCartAction {
    type: string = CLEAR_CART;
}