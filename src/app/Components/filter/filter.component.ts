import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Product } from 'src/app/Models/product';
import { ProductService } from 'src/app/services/product.service';
import { FilterSizeAction, FilterSortAction, LoadProductAction } from 'src/app/store/actions/product.actions';
import { StoreInterface } from 'src/app/store/store';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  FilterBySize: String = "";
  FilterBySort: String = "";
  products: Product[] = [];
  filteredPrd: Product[] = [];
  constructor(private store: Store<StoreInterface>,
    private prdService: ProductService,
    public translate: TranslateService) {
    this.store.subscribe(data => {
      this.products = data.product
    })
    this.prdService.getAllProducts().subscribe((data) => {
      this.filteredPrd = data
    })
  }

  ngOnInit(): void {
  }
  selectSizeHandler(event: any) {
    this.FilterBySize = event.target.value;
    console.log(this.FilterBySize);

    console.log(this.filteredPrd);
    this.store.dispatch(new FilterSizeAction(this.FilterBySize, this.filteredPrd))
  }
  selectSortHandler(event: any) {
    this.FilterBySort = event.target.value;
    console.log(this.FilterBySort);
    this.store.dispatch(new FilterSortAction(this.FilterBySort, this.products))
  }
}
