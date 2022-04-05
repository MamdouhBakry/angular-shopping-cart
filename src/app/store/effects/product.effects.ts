import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap, catchError } from "rxjs/operators";
import { of } from "rxjs";
import { environment } from "src/environments/environment";
import { FailedProductAction, LOAD, SuccessProductAction } from "../actions/product.actions";


@Injectable()

export class ProductsEffect {

    productEffect = createEffect(() => this.actions.pipe(
        ofType(LOAD),
        mergeMap(() => this.http.get(environment.APIURL + '/products').pipe(
            map((data) => {
                console.log(data)
                return new SuccessProductAction(data)
            }),
            catchError((err) => of(new FailedProductAction(err)))
        ))
    ))

    constructor(private http: HttpClient, private actions: Actions) {

    }
}