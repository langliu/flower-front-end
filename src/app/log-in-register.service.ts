import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ResponseData, User, UserRegister} from './login-data';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LogInRegisterService {

  constructor(private http: HttpClient) {
  }

  login(data: User): Observable<ResponseData> {
    return this.http.post<ResponseData>(' http://127.0.0.1:5000/login', data);
  }

  register(data: UserRegister): Observable<ResponseData> {
    return this.http.post<ResponseData>(' http://127.0.0.1:5000/register', data);
  }

}
