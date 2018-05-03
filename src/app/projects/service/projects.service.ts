import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Users} from '../model/Users';
import {NewProject, Project, ProjectDetail} from '../model/Projects';

@Injectable()
export class ProjectsService {

  constructor(private http: HttpClient) {
  }

  /**
   * 获取用户列表
   * @returns {Observable<Users>}
   */
  getUsers(): Observable<Users> {
    return this.http.get<Users>('http://127.0.0.1:5000/getUsers', {
      headers: new HttpHeaders({
        token: sessionStorage.getItem('token'),
        username: sessionStorage.getItem('userName')
      })
    });
  }

  /**
   * 获取项目列表
   * @returns {Observable<Project>}
   */
  getProjects(): Observable<Project> {
    return this.http.get<Project>('http://127.0.0.1:5000/getProjects', {
      headers: new HttpHeaders({
        token: sessionStorage.getItem('token'),
        username: sessionStorage.getItem('userName')
      })
    });
  }

  /**
   * 获取项目详情
   * @param {string} id 项目id
   * @returns {Observable<ProjectDetail>}
   */
  getProjectDetail(id): Observable<ProjectDetail> {
    return this.http.get<ProjectDetail>(`http://127.0.0.1:5000/getProjectDetail?id=${id}`, {
      headers: new HttpHeaders({
        token: sessionStorage.getItem('token'),
        username: sessionStorage.getItem('userName')
      })
    });
  }

  /**
   * 添加新的项目
   * @param {Object} data 新增项目信息
   * @returns {Observable<NewProject>}
   */
  addNewProject(data): Observable<NewProject> {
    return this.http.post<NewProject>(`http://127.0.0.1:5000/addProject`, data, {
      headers: new HttpHeaders({
        token: sessionStorage.getItem('token'),
        username: sessionStorage.getItem('userName')
      })
    });
  }
}
