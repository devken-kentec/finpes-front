import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContaRoutingModule } from './conta-routing.module';
import { ContaFormComponent } from './conta-form/conta-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    ContaFormComponent
  ],
  imports: [
    CommonModule,
    ContaRoutingModule,
    ReactiveFormsModule,
    CardModule,
    TableModule
  ]
})
export class ContaModule { }
