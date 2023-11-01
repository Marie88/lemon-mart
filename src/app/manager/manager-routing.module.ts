import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ManagerHomeComponent} from "./manager-home/manager-home.component";
import {ReceiptLookupComponent} from "./receipt-lookup/receipt-lookup.component";
import {UserManagementComponent} from "./user-management/user-management.component";
import {ManagerComponent} from "./manager/manager.component";

const managerModuleRoutes: Routes = [
  {
    path: '',
    component: ManagerComponent,
    children: [
      { path: '', redirectTo: '/manager/home', pathMatch: 'full' },
      { path: 'home', component: ManagerHomeComponent },
      { path: 'users', component: UserManagementComponent },
      { path: 'receipts', component: ReceiptLookupComponent },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(managerModuleRoutes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
