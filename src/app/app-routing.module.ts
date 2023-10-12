import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'periodo', loadChildren: ()=> import('./modulos/periodo/periodo.module').then(p => p.PeriodoModule )},
  { path: 'user', loadChildren: ()=> import('./modulos/user/user.module').then(u => u.UserModule )},
  { path: 'receita', loadChildren: ()=> import('./modulos/receita/receita.module').then(r => r.ReceitaModule )},
  { path: 'despesa', loadChildren: ()=> import('./modulos/despesa/despesa.module').then(d => d.DespesaModule )}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
