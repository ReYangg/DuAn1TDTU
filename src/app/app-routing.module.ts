import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AdminaddproductsComponent } from './adminaddproducts/adminaddproducts.component';
import { AdminlistaccountsComponent } from './adminlistaccounts/adminlistaccounts.component';
import { AdminlistproductsComponent } from './adminlistproducts/adminlistproducts.component';

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
