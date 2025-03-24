import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContratosRegisterPageComponent } from "./pages/contratos-register-page/contratos-register-page.component";
import { ContratosListPageComponent } from "./pages/contratos-list-page/contratos-list-page.component";
import { LayoutPageComponent } from "./pages/layout-page/layout-page.component";

const routes: Routes = [
    {
        path: '',
        component: LayoutPageComponent,
        children: [
            { path: 'list', component: ContratosListPageComponent },
            { path: 'register', component: ContratosRegisterPageComponent },
            { path: '**', redirectTo: 'list' }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContratosRoutingModule{ }