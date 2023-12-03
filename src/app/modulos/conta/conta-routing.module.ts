import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContaFormComponent } from './conta-form/conta-form.component';

const routes: Routes = [
   // { path: '', component: CadastroListComponent},
   { path: '', component: ContaFormComponent},
   //{ path: 'editar/:id', component: CadastroFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContaRoutingModule { }
