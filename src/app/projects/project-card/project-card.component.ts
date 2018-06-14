import { Component, OnInit, Input } from '@angular/core';
import { ProjectsService } from '../service/projects.service';
import { ProjectListItem } from '../model/Projects';
import { Users } from '../model/Users';
import { NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.less'],
})
export class ProjectCardComponent implements OnInit {
  @Input() title: string;
  @Input() time: string | null;
  @Input() username: string | null;
  @Input() _checked: boolean;
  @Input() cardId: number;

  public deadline: string | null;
  public item: ProjectListItem;
  public users: Users;
  public currentTime: string;

  constructor(private projectsService: ProjectsService, private modalService: NzModalService) {
  }

  ngOnInit() {
    this.item = {
      list_item_id: this.cardId,
      title: this.title,
      status: this._checked,
      deadline: this.time,
      username: this.username
    };
    if (this.time) {
      this.deadline = this.time;
    } else {
      this.deadline = null;
    }
    this.currentTime = this.formatDate(new Date());
  }

  getUsers(): void {
    this.projectsService
      .getUsers(Number(sessionStorage.getItem('active_team')))
      .subscribe(response => {
        if (response.success) {
          this.users = response;
          console.log(this.users);
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

  console(cardId: number): void {
    // 阻止事件冒泡
    event.stopPropagation();
    console.log(cardId);
    this.projectsService
      .itemAccomplished(cardId)
      .subscribe(response => {
        console.log(response);
      });
  }

  showPopover(): void {
    event.stopPropagation();
    this.getUsers();
  }

  dateChange(): void {
    // 格式化时间
    this.item.deadline = this.formatDate(new Date(this.deadline));
    this.projectsService.updateCard({list_item_id: this.item.list_item_id, deadline: this.item.deadline})
      .subscribe(response => {
        console.log(response);
      });
  }

  /**
   * 格式化日期
   * @param {Date} date 时间
   * @returns {string} ‘YYYY-MM-DD’
   */
  formatDate(date: Date): string {
    return `${date.getFullYear()}-` +
      `${String(date.getMonth() + 1).padStart(2, '0')}-` +
      `${String(date.getDate()).padStart(2, '0')}`;
  }
}
