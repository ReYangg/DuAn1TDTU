import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './AccountComponent/register/register.component';
import { LoginComponent } from './AccountComponent/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './ProductComponent/products/products.component';
import { NavbarComponent } from './GeneralComponent/navbar/navbar.component';
import { FooterComponent } from './GeneralComponent/footer/footer.component';
import { SidebarComponent } from './GeneralComponent/sidebar/sidebar.component';
import { AdminlistaccountsComponent } from './Admin/adminlistaccounts/adminlistaccounts.component';
import { AdminaddproductsComponent } from './Admin/adminaddproducts/adminaddproducts.component';
import { AdminlistproductsComponent } from './Admin/adminlistproducts/adminlistproducts.component';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageRenderComponent } from './GeneralComponent/image-render/image-render.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    ProductsComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    AdminlistaccountsComponent,
    AdminaddproductsComponent,
    AdminlistproductsComponent,
    ImageRenderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    AgGridModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
