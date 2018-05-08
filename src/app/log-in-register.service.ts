import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ResponseData, User, UserRegister} from './login-data';
import {Observable} from 'rxjs/Observable';
import {httpUrl} from './http-url';

@Injectable()
export class LogInRegisterService {

  constructor(private http: HttpClient) {
  }

  login(data: User): Observable<ResponseData> {
    return this.http.post<ResponseData>(httpUrl.login, data);
  }

  register(data: UserRegister): Observable<ResponseData> {
    return this.http.post<ResponseData>(httpUrl.register, data);
  }
}
