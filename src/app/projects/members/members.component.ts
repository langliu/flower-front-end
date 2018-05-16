import {Component, OnInit} from '@angular/core';
import {NzModalService} from 'ng-zorro-antd';
import {ProjectsService} from '../service/projects.service';
import {Users} from '../model/Users';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.less']
})
export class MembersComponent implements OnInit {
  public members: Users;

  constructor(private projectsService: ProjectsService, private confirmService: NzModalService) {
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.projectsService
      .getUsers(Number(sessionStorage.getItem('active_team')))
      .subscribe(response => {
        if (response.success) {
          this.members = response;
        } else {
          this.showConfirm(response.reason);
        }
      });
  }

  showConfirm(reason): void {
    this.confirmService.error({
      title: '错误',
      content: `${reason}，重新登录？`,
      okText: '确认',
      cancelText: '取消',
    });
  }
}
