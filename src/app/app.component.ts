import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Product } from './Models/product';
import { AddToCartAction } from './store/actions/cart.actions';
import { LoadProductAction } from './store/actions/product.actions';
import { StoreInterface } from './store/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //cartItems: Product[] = [];
  lang: string = "";
  constructor(private store: Store<StoreInterface>, public translate: TranslateService) {
  }
}
