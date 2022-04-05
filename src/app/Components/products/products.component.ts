import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Product } from 'src/app/Models/product';
import { ProductService } from 'src/app/services/product.service';
import { AddToCartAction } from 'src/app/store/actions/cart.actions';
import { LoadProductAction } from 'src/app/store/actions/product.actions';
import { StoreInterface } from 'src/app/store/store';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productList: Product[] = [];
  cartItems: Product[] = [];
  prdDetails: Product = <Product>{};
  //@ViewChild('showModal') showModal?: ElementRef;
  constructor(private prdserv: ProductService,
    private store: Store<StoreInterface>,
    public translate: TranslateService) {
    this.store.subscribe(data => {
      this.productList = data.product
      this.cartItems = data.cart.cartItems
    })
    this.store.dispatch(new LoadProductAction())

  }

  ngOnInit(): void {

  }
  addToCart(prd: Product) {
    this.store.dispatch(new AddToCartAction(prd, this.cartItems))
  }

  prdDetailsFun(prd: Product) {
    this.prdDetails = prd;
    console.log(this.prdDetails);
  }
}
