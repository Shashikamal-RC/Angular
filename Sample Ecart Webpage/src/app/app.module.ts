import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/main/product-list/product-list.component';
import { ContactUsComponent } from './components/main/contact-us/contact-us.component';
import { CartListComponent } from './components/main/cart-list/cart-list.component';
import { ProductDetailsComponent } from './components/main/product-details/product-details.component';
import { BlogsComponent } from './components/main/blogs/blogs.component';
import { CollectionsComponent } from './components/main/collections/collections.component';
import { SummerCollectionsComponent } from './components/main/summer-collections/summer-collections.component';
import { HomeComponent } from './components/main/home/home.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ContactUsComponent,
    CartListComponent,
    ProductDetailsComponent,
    BlogsComponent,
    CollectionsComponent,
    SummerCollectionsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
