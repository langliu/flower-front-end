import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ResopnseData, User, UserRegister} from './login-data';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LogInRegisterService {

  constructor(private http: HttpClient) {
  }

  login(data: User): Observable<ResopnseData> {
    return this.http.post<ResopnseData>(' http://127.0.0.1:5000/login', data);
  }

  register(data: UserRegister): Observable<ResopnseData> {
    return this.http.post<ResopnseData>(' http://127.0.0.1:5000/register', data);
  }

}
