import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.less'],
})
export class ProjectListComponent implements OnInit {
  public title = '完成登录注册';
  public time = '2018-07-11';
  public listName = '进行中';

  constructor() {
  }

  ngOnInit() {
  }

}
