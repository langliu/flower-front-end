import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.less']
})
export class ProjectListComponent implements OnInit {
  public title = '完成登录注册，记得今天之前完成哦！！！';
  public time = '2018-07-11';
  public listName = '进行中';
  public userName = sessionStorage.getItem('userName');

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  /**
   * 页面跳转
   * @param {string} url 跳转路径
   */
  goToPage(url) {
    this.router.navigate([url]);
  }
}
