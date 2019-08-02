import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductCreateComponent} from './product-create/product-create.component';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {ProductViewShowComponent} from './product-view-show/product-view-show.component';
import {ProductUpdateComponent} from './product-update/product-update.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'produits', component: ProductListComponent},
  {path: 'produits/creation', component: ProductCreateComponent},
  {path: 'produits/:id', component: ProductViewShowComponent},
  {path: 'produits/modification/:id', component: ProductUpdateComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
