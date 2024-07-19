import { Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { TwoWayComponent } from './two-way/two-way.component';
import { SignalComponentComponent } from './signal-component/signal-component.component';
import { StructuralComponent } from './structural/structural.component';
import { PipesExampleComponent } from './pipes-example/pipes-example.component';

export const routes: Routes = [
{
    path:'admin',
    loadChildren: () => import("./admin/admin.module").then(m => m.AdminModule)
},
{
    path:'add-user',
    loadComponent: () => import("./admin/add-user/add-user.component")
    .then(c => c.AddUserComponent)
},
{
    path:'two-way',
    component:TwoWayComponent
},
{
    path:'signal',
    component:SignalComponentComponent
},
{
    path:'structural',
    component:StructuralComponent
},
{
    path:'pipes',
    component:PipesExampleComponent
}
];
