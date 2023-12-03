import { UserService } from './../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../shared/user-model';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup;
  optionsStatus!: [];
  msgPost: boolean = false;
  users: User[] = [];
  nomeBotao: string = "Salvar";

  constructor(private fb: FormBuilder,
              private sharedService: SharedService,
              private  userService:UserService){
    this.userForm = this.fb.group({
      id: [ 0, []],
      nome: ['', [Validators.required]],
      sobrenome: ['', []],
      email: ['', [Validators.required]],
      role: ['', [Validators.required]],
      status: ['', [Validators.required]],
      senha: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.carregaStatus();
  }

  public carregaStatus(): void {
    this.sharedService.selectStatus().subscribe(
      res => this.optionsStatus = res
    );
  }

  gravarUser(): void {
    let form = this.userForm;
    if(form.valid){
      this.userService.salvarAlterarPeriodo(form.value).subscribe();
    }
    form.reset();
  }

  editar(user: User){

  }

  pegarDados(user: User) {

  }
}
