import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ManagerHomeComponent} from "../manager/manager-home/manager-home.component";
import {InventoryComponent} from "./inventory.component";
import {StockComponent} from "./stock/stock.component";
import {ProductsComponent} from "./products/products.component";
import {CategoriesComponent} from "./categories/categories.component";

const routes: Routes = [
  {
    path: '',
    component: InventoryComponent,
    children: [
      { path: '', redirectTo: '/inventory/home', pathMatch: 'full' },
      { path: 'home', component: ManagerHomeComponent },
      { path: 'stock', component: StockComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'categories', component: CategoriesComponent }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
