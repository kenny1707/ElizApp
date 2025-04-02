import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutPageComponent } from "./pages/layout-page/layout-page.component";
import { VacationListPageComponent } from "./pages/vacation-list-page/vacation-list-page.component";
import { VacationRegisterPageComponent } from "./pages/vacation-register-page/vacation-register-page.component";
import { VacationAprobarPageComponent } from "./pages/vacation-aprobar-page/vacation-aprobar-page.component";

const routes: Routes = [
    {
        path: '',
        component: LayoutPageComponent,
        children: [
            { path: 'list', component: VacationListPageComponent },
            { path: 'register', component: VacationRegisterPageComponent },
            { path: 'aprobar', component: VacationAprobarPageComponent },
            { path: '**', redirectTo: 'list' }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VacationRoutingModule{ }
