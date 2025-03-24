import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacationListPageComponent } from './pages/vacation-list-page/vacation-list-page.component';
import { VacationRegisterPageComponent } from './pages/vacation-register-page/vacation-register-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { MaterialModule } from '../material/material.module';
import { VacationRoutingModule } from './vacaciones-routing.module';



@NgModule({
  declarations: [
    VacationListPageComponent,
    VacationRegisterPageComponent,
    LayoutPageComponent
  ],
  imports: [
    CommonModule,
    VacationRoutingModule,
    MaterialModule
  ]
})
export class VacacionesModule { }
