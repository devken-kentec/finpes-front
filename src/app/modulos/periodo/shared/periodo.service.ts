import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { take } from 'rxjs/operators';
import { Periodo } from './periodo-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeriodoService {

  private readonly api = `${environment.api}/finpes/api/v1/periodo`;
  private http = inject(HttpClient);

  private gravarPeriodo(periodo: Periodo) {
    return this.http.post(`${this.api}`, periodo);
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

  public listarPeriodo(): Observable<Periodo[]> {
    return this.http.get<Periodo[]>(`${this.api}/list/periodo`);
  }
}
