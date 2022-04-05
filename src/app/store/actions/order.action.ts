
export const SUCCESS = "[orders]/success";
export const FAILD = "[orders]/failed";
export const LOAD = "[orders]/load";
export const CREATE_ORDER = "[orders]/CREATE_ORDER";
export const CLEAR_ORDER = "[orders]/CLEAR_ORDER";
export class LoadOrdertAction {
    type: string = LOAD;
}
export class SuccessOrderAction {
    type: string = SUCCESS;
    payload: any;
    constructor(payload: any) {
        this.payload = payload;
    }
}
export class FailedOrderAction {
    type: string = FAILD;
    payload: any;
    constructor(payload: any) {
        this.payload = payload;
    }
}
export class CreateOrderAction {
    type: string = CREATE_ORDER;
    payload: any;
    constructor(payload: any) {
        this.payload = payload;
    }
}

export class ClearOrderAction {
    type: string = CLEAR_ORDER;
}