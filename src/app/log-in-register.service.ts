import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ResponseData, User, UserRegister} from './login-data';
import {Observable} from 'rxjs/Observable';
import {httpUrl} from './http-url';

@Injectable()
export class LogInRegisterService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8;',
    })
  };

  constructor(private http: HttpClient) {
  }

  login(data: User): Observable<ResponseData> {
    const user = new URLSearchParams();
    for (const [k, v] of Object.entries(data)) {
      user.append(k, v);
    }
    return this.http.post<ResponseData>(httpUrl.login, user.toString(), this.httpOptions);
  }

  register(data: UserRegister): Observable<ResponseData> {
    const user = new URLSearchParams();
    for (const [k, v] of Object.entries(data)) {
      user.append(k, v);
    }
    return this.http.post<ResponseData>(httpUrl.register, user.toString(), this.httpOptions);
  }
}
