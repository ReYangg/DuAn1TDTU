import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './AccountComponent/register/register.component';
import { LoginComponent } from './AccountComponent/login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './ProductComponent/products/products.component';
import { AdminaddproductsComponent } from './Admin/adminaddproducts/adminaddproducts.component';
import { AdminlistaccountsComponent } from './Admin/adminlistaccounts/adminlistaccounts.component';
import { AdminlistproductsComponent } from './Admin/adminlistproducts/adminlistproducts.component';

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'products', component: ProductsComponent},
  {path: '',   redirectTo: '/home', pathMatch: 'full' },
  {path: 'adminaddproducts', component: AdminaddproductsComponent},
  {path: 'adminlistaccounts', component: AdminlistaccountsComponent},
  {path: 'adminlistproducts', component: AdminlistproductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
