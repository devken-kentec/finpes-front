import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { take, tap } from 'rxjs/operators';
import { Periodo } from './periodo-model';

@Injectable({
  providedIn: 'root'
})
export class PeriodoService {

  private readonly api = `${environment.api}/finpes/api/v1/periodo`;

  constructor(private http: HttpClient) { }

  public selectStatus(){
    return this.http.get<[]>(`${this.api}/opt/status`).pipe(
      take(1),
      tap(console.log)
    );
  }

  private gravarPeriodo(periodo: Periodo) {
    return this.http.post(`${this.api}`, periodo).pipe(
      take(1)
    );
  }

  private alterarPeriodo(periodo: Periodo) {
    return this.http.put(`${this.api}`, periodo).pipe(
      take(1)
    );
  }

  public salvarAlterarPeriodo(periodo: Periodo){
    if(periodo.id > 0){
      return this.alterarPeriodo(periodo)
    } else {
      return this.gravarPeriodo(periodo);
    }
  }

  public listarPeriodo() {
    return this.http.get<Periodo[]>(`${this.api}/list/periodo`).pipe(
      take(1)
    );
  }
}