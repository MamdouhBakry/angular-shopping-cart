import { Product } from "src/app/Models/product";
import { FAILD, FILTER_BY_SIZE, FILTER_BY_SORT, SUCCESS } from "../actions/product.actions";


export function productReducer(state: Product[] = [], action: any) {
    switch (action.type) {
        case SUCCESS:
            return action.payload
        case FAILD:
            console.log(action.payload)
            return state;
        case FILTER_BY_SIZE:
            const productsSizeClone = [...action.products];
            let newProductsSize = productsSizeClone.filter(p => p.sizes.indexOf(action.payload) != -1);
            if (action.payload === "ALL") {
                console.log(productsSizeClone)
                return action.products
            }
            else {
                console.log(newProductsSize)
                return newProductsSize
            }

        case FILTER_BY_SORT:
            let productsClone = [...action.products];
            let newProducts = productsClone.sort(function (a, b) {
                if (action.payload == "lowest") {
                    return a.price - b.price;
                } else if (action.payload == "highest") {
                    return b.price - a.price;
                } else {
                    return a.id < b.id ? 1 : -1;
                }
            })
            return newProducts
        default:
            return state;
    }
}