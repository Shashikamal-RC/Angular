import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogsComponent } from '../app/components/main/blogs/blogs.component'
import { CartListComponent } from '../app/components/main/cart-list/cart-list.component'
import { CollectionsComponent } from '../app/components/main/collections/collections.component'
import { ContactUsComponent } from '../app/components/main/contact-us/contact-us.component'
import { ProductDetailsComponent } from '../app/components/main/product-details/product-details.component'
import { ProductListComponent } from '../app/components/main/product-list/product-list.component'
import { SummerCollectionsComponent } from '../app/components/main/summer-collections/summer-collections.component'
import { HomeComponent } from '../app/components/main/home/home.component'

const routes: Routes = [
  {path : '', redirectTo : 'home', pathMatch : 'full'},
  {path : 'home' , component : HomeComponent},
  {path : 'product-details', component : ProductDetailsComponent},
  {path : 'product-list', component : ProductListComponent},
  {path : 'summer-collections', component : SummerCollectionsComponent},
  {path : 'collections', component : CollectionsComponent},
  {path : 'cart-list', component : CartListComponent},
  {path : 'blogs', component : BlogsComponent},
  {path : 'contact-us', component : ContactUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
