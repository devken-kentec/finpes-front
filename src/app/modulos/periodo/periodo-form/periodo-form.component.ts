import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PeriodoService } from '../shared/periodo.service';
import { Periodo } from '../shared/periodo-model';

@Component({
  selector: 'app-periodo-form',
  templateUrl: './periodo-form.component.html',
  styleUrls: ['./periodo-form.component.css'],
  preserveWhitespaces: true
})
export class PeriodoFormComponent implements OnInit {

  periodoForm: FormGroup;
  optionsStatus!: [];
  msgPost: boolean = false;
  periodos: Periodo[] = [];
  nomeBotao: string = "Salvar";

  constructor(private fb: FormBuilder, private periodoService: PeriodoService) {
    this.periodoForm = this.fb.group({
      id: [ 0, []],
      referencia: ['', [Validators.required]],
      status: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.carregaStatus();
    this.carregarListaPeriodo();
  }

  public carregaStatus(): void {
    this.periodoService.selectStatus().subscribe(
      res => this.optionsStatus = res
    );
  }

  public carregarListaPeriodo(): void  {
   this.periodoService.listarPeriodo().subscribe(
    res => this.periodos = res
   );
  }

  public gravarPeriodo(): void {
    let form = this.periodoForm;
    if(form.valid){
      this.periodoService.salvarAlterarPeriodo(form.value).subscribe((success)=> {
        this.msgPost = true;
      });
      form.reset();
      this.carregarListaPeriodo();
      this.nomeBotao = "Salvar";
    }
  }

  public editar(periodo: Periodo): void {
    this.nomeBotao = "Alterar";
    this.periodoForm.patchValue(periodo);
  }

  public pegarDados(periodo: Periodo): void {

  }
}
