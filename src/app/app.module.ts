import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './pages/board-user/board-user.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { FooterComponent } from './sharepages/footer/footer.component';
import { HeaderComponent } from './sharepages/header/header.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { MainhomeComponent } from './pages/mainhome/mainhome.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { CartitemComponent } from './cart/cartitem/cartitem.component';
import { ShopComponent } from './shop/shop.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    FooterComponent,
    HeaderComponent,
    ContactComponent,
    AboutComponent,
    MainhomeComponent,
    CartComponent,
    ProductComponent,
    CartitemComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
