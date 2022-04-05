import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { OrdersComponent } from './Pages/orders/orders.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, //Default path
  { path: 'home', component: HomeComponent },
  { path: 'orders', component: OrdersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
