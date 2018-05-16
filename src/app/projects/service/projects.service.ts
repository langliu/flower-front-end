import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Users} from '../model/Users';
import {NewCard, NewCardResponse, NewProject, Project, ProjectDetail, ProjectItem} from '../model/Projects';
import {httpUrl} from '../../http-url';

@Injectable()
export class ProjectsService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8;',
    })
  };

  constructor(private http: HttpClient) {
  }

  /**
   * 获取用户列表
   * @returns {Observable<Users>}
   */
  getUsers(active_team: number): Observable<Users> {
    return this.http.get<Users>(`${httpUrl.getUsers}?active_team=${active_team}`, {
      headers: new HttpHeaders({
        token: sessionStorage.getItem('token'),
        email: sessionStorage.getItem('email')
      })
    });
  }

  /**
   * 获取项目列表
   * @returns {Observable<Project>}
   */
  getProjects(active_team: number): Observable<Project> {
    return this.http.get<Project>(`${httpUrl.getProjects}?team_id=${active_team}`, {
      headers: new HttpHeaders({
        token: sessionStorage.getItem('token')
      })
    });
  }

  /**
   * 获取项目详情
   * @param {string} id 项目id
   * @returns {Observable<ProjectDetail>}
   */
  getProjectDetail(id): Observable<ProjectDetail> {
    return this.http.get<ProjectDetail>(`${httpUrl.getProjectDetail}?project_id=${id}`, {
      headers: new HttpHeaders({
        token: sessionStorage.getItem('token')
      })
    });
  }

  /**
   * 添加新的项目
   * @param {Object} data 新增项目信息
   * @returns {Observable<NewProject>}
   */
  addNewProject(data: Object): Observable<NewProject> {
    const postData = new URLSearchParams();
    for (const [k, v] of Object.entries(data)) {
      postData.append(k, v);
    }
    return this.http.post<NewProject>(httpUrl.addProject, postData.toString(), this.httpOptions);
  }

  /**
   * 改变项目任务的状态
   * @param {number} id 任务id
   * @returns {Observable<any>}
   */
  itemAccomplished(id: number): Observable<any> {
    return this.http.get(`${httpUrl.itemAccomplished}?list_item_id=${id}`, {
        headers: new HttpHeaders({
          token: sessionStorage.getItem('token'),
        })
      }
    );
  }

  /**
   * 获取任务详情
   * @param {string} id 任务id
   * @returns {Observable<ProjectItem>}
   */
  getCardDetail(id: string): Observable<ProjectItem> {
    return this.http.get<ProjectItem>(`${httpUrl.getProjectItem}?id=${id}`, {
      headers: new HttpHeaders({
        token: sessionStorage.getItem('token'),
        username: sessionStorage.getItem('userName')
      })
    });
  }

  /**
   * 新建任务
   * @param {NewCard} data 提交数据
   * @returns {Observable<any>}
   */
  createNewCard(data: NewCard): Observable<any> {
    const postData = new URLSearchParams();
    for (const [k, v] of Object.entries(data)) {
      postData.append(k, v);
    }
    return this.http.post<NewCardResponse>(httpUrl.createNewCard, postData.toString(), this.httpOptions);
  }
}
