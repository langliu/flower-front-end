import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Users} from '../model/Users';
import {NewCard, NewCardResponse, NewProject, Project, ProjectDetail, ProjectItem, ProjectListItem} from '../model/Projects';
import {httpUrl} from '../../http-url';
import {NewListPostData, NewListResponse} from '../model/NewList';
import {TaskDetail} from '../model/TaskDetail';
import {TaskPostData, TaskResponse} from '../model/Task';

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
   * 处理post请求提交的数据
   * @param {Object} data 表单数据
   * @returns {string} 处理结果
   */
  handlePostData(data: Object) {
    const postData = new URLSearchParams();
    for (const [k, v] of Object.entries(data)) {
      postData.append(k, v);
    }
    return postData.toString();
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
    const postData = this.handlePostData(data);
    return this.http.post<NewProject>(httpUrl.addProject, postData, this.httpOptions);
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
  getCardDetail(id: string): Observable<TaskDetail> {
    return this.http.get<TaskDetail>(`${httpUrl.getProjectItem}?list_item_id=${id}`, {
      headers: new HttpHeaders({
        token: sessionStorage.getItem('token')
      })
    });
  }

  /**
   * 新建任务
   * @param {NewCard} data 提交数据
   * @returns {Observable<any>}
   */
  createNewCard(data: NewCard): Observable<any> {
    const postData = this.handlePostData(data);
    return this.http.post<NewCardResponse>(httpUrl.createNewCard, postData, this.httpOptions);
  }

  /**
   * 新建列表
   * @param {NewListPostData} data
   * @returns {Observable<NewListResponse>}
   */
  createNewList(data: NewListPostData): Observable<NewListResponse> {
    const postData = this.handlePostData(data);
    return this.http.post<NewListResponse>(httpUrl.createProjectList, postData, this.httpOptions);
  }

  /**
   * 新建任务检查项
   * @param {TaskPostData} data
   * @returns {Observable<TaskResponse>}
   */
  createTask(data: TaskPostData): Observable<TaskResponse> {
    const postData = this.handlePostData(data);
    return this.http.post<TaskResponse>(httpUrl.addTask, postData, this.httpOptions);
  }

  /**
   * 升级Card信息
   * @param {ProjectListItem} data 升级数据
   * @returns {Observable<any>}
   */
  updateCard(data: ProjectListItem): Observable<any> {
    console.log('update');
    const postData = this.handlePostData(data);
    return this.http.post(httpUrl.updateItem, postData, this.httpOptions);
  }

  /**
   * 完成任务检查项
   * @param {number} id 检查项id
   * @returns {Observable<{success: boolean}>}
   */
  taskComplete(id: number): Observable<{ success: boolean; progress: number; }> {
    return this.http.get<{ success: boolean; progress: number; }>(`${httpUrl.itemTaskComplete}?item_detail_id=${id}`);
  }
}
