import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

private readonly api = `${environment.api}/finpes/api/v1/utils`;
private  http = inject(HttpClient);

public selectStatus(){
  return this.http.get<[]>(`${this.api}/opt/status`);
}

}
