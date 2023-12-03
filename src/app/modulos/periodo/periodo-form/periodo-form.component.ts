import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PeriodoService } from '../shared/periodo.service';
import { Periodo } from '../shared/periodo-model';
import { take } from 'rxjs';
import { SharedService } from '../../shared/shared.service';

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

  constructor(private fb: FormBuilder, private periodoService: PeriodoService, private sharedService: SharedService) {
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
    this.sharedService.selectStatus().pipe(
      take(1)
    ).subscribe(
      {
        next: (res) => {this.optionsStatus = res},
        error: err => {
          console.log("Erro na requisição!", err);
        },
      }

    );
  }

  public carregarListaPeriodo(): void  {
   this.periodoService.listarPeriodo().pipe(take(1)).subscribe(
    res => this.periodos = res
   );
  }

  public gravarPeriodo(): void {
    let form = this.periodoForm;
    if(form.valid){
      this.periodoService.salvarAlterarPeriodo(form.value).pipe(take(1)).subscribe({
        next: () => {
            this.msgPost = true;
            this.nomeBotao = "Salvar";
            this.carregarListaPeriodo();
        },
        error: (err) => {
          console.log("Erro na requisição!", err);
        }
      });
      form.reset();
    }
  }

  public editar(periodo: Periodo): void {
    this.nomeBotao = "Alterar";
    this.periodoForm.patchValue(periodo);
  }

  public pegarDados(periodo: Periodo): void {

  }
}
