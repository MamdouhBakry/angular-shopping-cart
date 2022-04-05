import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Order } from 'src/app/Models/order';
import { Product } from 'src/app/Models/product';
import { LoadOrdertAction } from 'src/app/store/actions/order.action';
import { StoreInterface } from 'src/app/store/store';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  ordersList: Order[] = [];
  cartItems: Product[] = []
  constructor(private store: Store<StoreInterface>) {
    this.store.subscribe(data => {
      this.ordersList = data.orders.orders;
      this.cartItems = data.cart.cartItems;
    })
    this.store.dispatch(new LoadOrdertAction());
    console.log(this.ordersList);
  }

  ngOnInit(): void {
  }

}
