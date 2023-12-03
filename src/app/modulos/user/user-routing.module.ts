import { UserFormComponent } from './user-form/user-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
     // { path: '', component: CadastroListComponent},
     { path: '', component: UserFormComponent },
     //{ path: 'editar/:id', component: CadastroFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
