import {Component, OnInit} from '@angular/core';
import {NzModalService} from 'ng-zorro-antd';
import {ProjectsService} from '../service/projects.service';
import {Users} from '../model/Users';
import {Router} from '@angular/router';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.less']
})
export class MembersComponent implements OnInit {
  public members: Users;

  constructor(private projectsService: ProjectsService, private confirmServ: NzModalService, private router: Router) {
  }

  ngOnInit() {
    this.projectsService.getUsers().subscribe(response => {
      if (response.success) {
        this.members = response;
      } else {
        this.showConfirm(response.reason);
      }
    });
  }

  showConfirm(reason) {
    this.confirmServ.error({
      title: '错误',
      content: `${reason}，重新登录？`,
      okText: '确认',
      cancelText: '取消',
    });
  }
}
