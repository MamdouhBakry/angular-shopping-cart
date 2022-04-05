import { Product } from "src/app/Models/product";

export const SUCCESS = "[products]/success";
export const FAILD = "[products]/failed";
export const LOAD = "[products]/load";
export const FILTER_BY_SIZE = "[products]/filter by size"
export const FILTER_BY_SORT = "[products]/filter by sort"

export class LoadProductAction {
    type: string = LOAD;
}
export class SuccessProductAction {
    type: string = SUCCESS;
    payload: any;
    constructor(payload: any) {
        this.payload = payload;
    }
}
export class FailedProductAction {
    type: string = FAILD;
    payload: any;
    constructor(payload: any) {
        this.payload = payload;
    }
}

export class FilterSizeAction {
    type: string = FILTER_BY_SIZE;
    payload: any;
    products: Product[];
    constructor(payload: any, products: Product[]) {
        this.payload = payload;
        this.products = products;
    }
}


export class FilterSortAction {
    type: string = FILTER_BY_SORT;
    payload: any;
    products: Product[];
    constructor(payload: any, products: Product[]) {
        this.payload = payload;
        this.products = products;
    }
} 