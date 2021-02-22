import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { PeopleComponent } from './people/people.component';
import { ProductsComponent } from './products/products.component';
import { ComodoComponent } from './comodo/comodo.component';
import { AparelhosComponent } from './aparelhos/aparelhos.component';
import { DashComponent } from './dash/dash.component';
import { AlertsComponent } from './alerts/alerts.component';
import { DetailsComponent } from './details/details.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [PeopleComponent, ProductsComponent, ComodoComponent, AparelhosComponent, DashComponent, AlertsComponent, DetailsComponent, TutorialsComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    MatListModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
  ]
})
export class MainModule { }
