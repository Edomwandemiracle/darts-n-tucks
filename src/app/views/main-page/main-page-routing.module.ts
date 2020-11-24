import { HomeModule } from './../home/home.module';
import { ProductModule } from './../product/product.module';
import { AboutUsComponent } from './../about-us/about-us.component';
import { ContactComponent } from './../contact/contact.component';
import { HomeComponent } from './../home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page.component';
import { CartComponent } from '../cart/cart.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      { path: '', component: HomeComponent },
      // { path: 'home', component: HomeComponent },
      // { path: 'contact-us', component: ContactComponent },
      // // { path: 'contact-us', component: ContactComponent },
      // { path: 'cart', component: CartComponent },
      // { path: 'about-us', component: AboutUsComponent },

      {
        path: 'home',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'cart',
        loadChildren: () =>
          import('../cart/cart.module').then((m) => m.CartModule),
      },
      {
        path: 'contact-us',
        loadChildren: () =>
          import('../contact/contact.module').then((m) => m.ContactModule),
      },
      {
        path: 'about-us',
        loadChildren: () =>
          import('../about-us/about-us.module').then((m) => m.AboutUsModule),
      },
      {
        path: '',
        // canActivate: [AuthGuardService],
        // data: {
        //   // role must be either Admin or Restaurant or Customer.
        //   expectedRoles: ["Customer"],
        // },
        loadChildren: () =>
          import('../product/product.module').then((m) => m.ProductModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule { }
