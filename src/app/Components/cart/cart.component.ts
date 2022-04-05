import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/Models/product';
import { ClearCartAction, RemoveFromCartAction } from 'src/app/store/actions/cart.actions';
import { CreateOrderAction, LoadOrdertAction } from 'src/app/store/actions/order.action';
import { OrdersEffect } from 'src/app/store/effects/order.effects';
import { StoreInterface } from 'src/app/store/store';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems: Product[] = [];
  showForm: boolean = false;
  Name: string = "";
  Email: string = "";
  Total: number = 0;
  constructor(private store: Store<StoreInterface>, private orderService: OrdersEffect) {
    this.store.subscribe(data => {
      this.cartItems = data.cart.cartItems;
    })
  }

  ngOnInit(): void {
  }
  renoveFromCart(prd: Product) {
    this.store.dispatch(new RemoveFromCartAction(prd, this.cartItems))
  }

  setShowForm() {
    this.showForm = !this.showForm;
  }
  submitOredr() {
    let order = {
      name: this.Name,
      email: this.Email
    }
    this.orderService.AddOrder(order).subscribe((data) => {
      if (data) {

        this.store.dispatch(new CreateOrderAction(data));
        this.store.dispatch(new ClearCartAction());
        this.store.dispatch(new LoadOrdertAction())


      }
      console.log(data)
    })
  }

  calcTotal() {
    this.Total = this.cartItems.reduce((acc, p) => {
      return acc + p.price
    }, 0)
    return this.Total;
  }
}
