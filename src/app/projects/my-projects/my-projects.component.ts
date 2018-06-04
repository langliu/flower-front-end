import {Component, OnInit} from '@angular/core';
import {ProjectsService} from '../service/projects.service';
import {MyTaskResponse} from '../model/MyTask';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.less']
})
export class MyProjectsComponent implements OnInit {
  username = sessionStorage.getItem('username');
  email = sessionStorage.getItem('email');
  myTasks: MyTaskResponse;

  constructor(private projectsService: ProjectsService) {
  }

  ngOnInit() {
    this.getMyTasks(sessionStorage.getItem('userId'));
  }

  /**
   * 获取用户所有的项目
   * @param {string} userId 用户id
   */
  getMyTasks(userId: string) {
    this.projectsService.getMyTasks(userId)
      .subscribe(response => {
        console.log(response);
        this.myTasks = response;
      });
  }

  /**
   * 改变任务完成状态
   * @param {number} cardId 任务id
   */
  completeTask(cardId: number): void {
    // 阻止事件冒泡
    event.stopPropagation();
    console.log(cardId);
    this.projectsService
      .itemAccomplished(cardId)
      .subscribe(response => {
        this.getMyTasks(sessionStorage.getItem('userId'));
      });
  }
}
