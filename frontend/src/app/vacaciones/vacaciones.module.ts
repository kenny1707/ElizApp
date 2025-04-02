import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacationListPageComponent } from './pages/vacation-list-page/vacation-list-page.component';
import { VacationRegisterPageComponent } from './pages/vacation-register-page/vacation-register-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { MaterialModule } from '../material/material.module';
import { VacationRoutingModule } from './vacaciones-routing.module';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { FormsModule } from '@angular/forms';
import { VacationAprobarPageComponent } from './pages/vacation-aprobar-page/vacation-aprobar-page.component';


registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    VacationListPageComponent,
    VacationRegisterPageComponent,
    LayoutPageComponent,
    VacationAprobarPageComponent
  ],
  imports: [
    CommonModule,
    VacationRoutingModule,
    MaterialModule,
    FormsModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }]
})
export class VacacionesModule {

}
