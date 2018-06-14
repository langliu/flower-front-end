import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';
import { ProjectsService } from '../service/projects.service';
import { Users } from '../model/Users';
import { DeleteMember } from '../model/DeleteMember';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.less']
})
export class MembersComponent implements OnInit {
  public members: Users;
  isAdministrator = false;

  constructor(private projectsService: ProjectsService, private modalService: NzModalService) {
  }

  ngOnInit() {
    this.getUsers();
  }

  /**
   * 获取团队成员信息
   */
  getUsers(): void {
    this.projectsService
      .getUsers(Number(sessionStorage.getItem('active_team')))
      .subscribe(response => {
        if (response.success) {
          this.members = response;
          for (const user of this.members.user_list) {
            if (user.user_id === Number.parseInt(sessionStorage.getItem('userId'))) {
              if (user.permission === '0') {
                this.isAdministrator = true;
              }
            }
          }
          this.members.user_list.sort((a, b) => {
            return Number(a.permission) - Number(b.permission);
          });
        } else {
          this.showConfirm(response.reason);
        }
      });
  }

  showConfirm(reason): void {
    this.modalService.error({
      nzTitle: '错误',
      nzContent: `${reason}，重新登录？`,
      nzOkText: '确认',
      nzCancelText: '取消',
    });
  }

  /**
   * 删除团队用户
   * @param {number} userId 用户id
   */
  deleteTeamUser(userId: number) {
    const data: DeleteMember = {
      teamId: sessionStorage.getItem('active_team'),
      userId: userId.toString()
    };
    this.projectsService.deleteTeamUser(data)
      .subscribe(res => {
        console.log(res);
      });
  }
}
