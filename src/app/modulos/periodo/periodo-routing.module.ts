import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeriodoFormComponent } from './periodo-form/periodo-form.component';

const routes: Routes = [
 // { path: '', component: CadastroListComponent},
  { path: '', component: PeriodoFormComponent},
  //{ path: 'editar/:id', component: CadastroFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeriodoRoutingModule { }
