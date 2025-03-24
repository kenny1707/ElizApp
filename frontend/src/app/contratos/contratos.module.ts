import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ContratosListPageComponent } from './pages/contratos-list-page/contratos-list-page.component';
import { ContratosRegisterPageComponent } from './pages/contratos-register-page/contratos-register-page.component';
import { MaterialModule } from '../material/material.module';
import { ContratosRoutingModule } from './contratos-routing.module';



@NgModule({
  declarations: [
    LayoutPageComponent,
    ContratosListPageComponent,
    ContratosRegisterPageComponent
  ],
  imports: [
    CommonModule,
    ContratosRoutingModule,
    MaterialModule
  ]
})
export class ContratosModule { }
