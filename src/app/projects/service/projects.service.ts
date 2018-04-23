import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Users} from '../model/Users';

@Injectable()
export class ProjectsService {
  // 设置请求token
  public httpOptions = {
    headers: new HttpHeaders({
      token: sessionStorage.getItem('token'),
      username: sessionStorage.getItem('userName')
    })
  };

  constructor(private http: HttpClient) {
  }

  /**
   * 获取用户列表
   * @returns {Observable<Users>}
   */
  getUsers(): Observable<Users> {
    return this.http.get<Users>('http://127.0.0.1:5000/getUsers', this.httpOptions);
  }
}
