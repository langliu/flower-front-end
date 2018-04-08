import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ResopnseData, User, UserRegister} from './login-data';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LogInRegisterService {
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;',
      // 'Authorization': 'my-auth-token',
    }),
  };

  constructor(private http: HttpClient) {
  }

  login(data: User): Observable<ResopnseData> {
    console.log(data.toString());
    return this.http.post<ResopnseData>(' http://127.0.0.1:5000/login', data, this.httpOptions);
  }

  register(data: UserRegister): Observable<ResopnseData> {
    return this.http.post<ResopnseData>(' http://127.0.0.1:5000/register', data);
  }

}
