import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeriodoRoutingModule } from './periodo-routing.module';
import { PeriodoFormComponent } from './periodo-form/periodo-form.component';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    PeriodoFormComponent
  ],
  imports: [
    CommonModule,
    PeriodoRoutingModule,
    ReactiveFormsModule,
    CardModule,
    TableModule
  ]
})
export class PeriodoModule { }
