import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ListProductComponent} from './list-product/list-product.component';
import {LoginService} from "./provider/login.service";
import {ProductService} from "./provider/product.service";
import {InterceptorService} from "./provider/interceptor.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {
  MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatGridListModule, MatInputModule,
  MatMenuModule
} from "@angular/material";
import {AuthGuardService} from "./provider/auth-guard.service";
import {SharedService} from "./provider/shared.service";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ListProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatMenuModule,
    MatGridListModule
  ],
  providers: [LoginService, ProductService, {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true,
  }, InterceptorService, AuthGuardService,SharedService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
