import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PeriodoService } from '../../periodo/shared/periodo.service';
import { Conta } from '../shared/conta-model';

@Component({
  selector: 'app-conta-form',
  templateUrl: './conta-form.component.html',
  styleUrls: ['./conta-form.component.css']
})
export class ContaFormComponent {

  contaForm: FormGroup;
  optionsStatus!: [];
  msgPost: boolean = false;
  contas: Conta[] = [];
  nomeBotao: string = "Salvar";

  constructor(private fb: FormBuilder, private periodoService: PeriodoService) {
    this.contaForm = this.fb.group({
      id: [ 0, []],
      referencia: ['', [Validators.required]],
      status: ['', [Validators.required]]
    });
  }

  gravarPeriodo(){

  }

  editar(conta: Conta){

  }

  pegarDados(conta: Conta) {

  }
}
