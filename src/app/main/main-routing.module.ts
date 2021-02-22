import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleComponent } from './people/people.component';
import { ProductsComponent } from './products/products.component';
import { AlertsComponent } from './alerts/alerts.component';
import { AparelhosComponent } from './aparelhos/aparelhos.component';
import { ComodoComponent } from './comodo/comodo.component';
import { DetailsComponent } from './details/details.component';
import { DashComponent } from './dash/dash.component';
import { TutorialsComponent } from './tutorials/tutorials.component';

const routes: Routes = [
  {path: '', redirectTo: 'dash'},
  { path: 'alerts', component: AlertsComponent},
  { path: 'aparelhos', component: AparelhosComponent},
  { path: 'comodo', component: ComodoComponent},
  { path: 'details', component: DetailsComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'people', component: PeopleComponent},
  { path: 'dash', component: DashComponent},
  { path: 'tutorials', component: TutorialsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
