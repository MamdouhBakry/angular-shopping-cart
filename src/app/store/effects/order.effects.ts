import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap, catchError } from "rxjs/operators";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import { FailedOrderAction, LOAD, SuccessOrderAction } from "../actions/order.action";
import { Order } from "src/app/Models/order";


@Injectable()

export class OrdersEffect {

    constructor(private http: HttpClient, private actions: Actions) {

    }
    orderFetchEffect = createEffect(() => this.actions.pipe(
        ofType(LOAD),
        mergeMap(() => this.http.get(environment.APIURL + '/orders').pipe(
            map((data) => {
                console.log(data)
                return new SuccessOrderAction(data)
            }),
            catchError((err) => of(new FailedOrderAction(err)))
        ))
    ))
    AddOrder(order: Order): Observable<Order> {
        return this.http.post<Order>(environment.APIURL + '/orders', order);
    }
}