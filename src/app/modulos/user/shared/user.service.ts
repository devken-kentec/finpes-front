import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from './user-model';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly api = `${environment.api}/finpes/api/v1/user`;

  constructor(private http: HttpClient) { }

  private gravarUser(user: User){
    return this.http.post(`${this.api}`, user).pipe(
      take(1)
    );
  }

  private alterarUser(user: User){
    return this.http.put(`${this.api}`, user).pipe(
      take(1)
    );
  }


  public salvarAlterarPeriodo(user: User){
    if(user.id > 0){
      return this.alterarUser(user)
    } else {
      return this.gravarUser(user);
    }
  }
}
