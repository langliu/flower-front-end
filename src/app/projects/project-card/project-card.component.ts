import {Component, OnInit, Input} from '@angular/core';
import {ProjectsService} from '../service/projects.service';
import {ProjectListItem} from '../model/Projects';
import {Users} from '../model/Users';
import {NzModalService} from 'ng-zorro-antd';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.less'],
})
export class ProjectCardComponent implements OnInit {
  @Input() title: string;
  @Input() time: string;
  @Input() listName: string;
  @Input() _checked: boolean;
  @Input() cardId: number;
  public item: ProjectListItem = {deadline: null};
  public users: Users;
  public currentTime = new Date();

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
          this.users = response;
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
  }

  dateChange(): void {
    console.log(event);
    console.log(this.item);
  }
}
