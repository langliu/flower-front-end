import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProjectsService} from '../service/projects.service';
import {ProjectDetail} from '../model/Projects';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.less']
})
export class ProjectListComponent implements OnInit {
  public title = '完成登录注册，记得今天之前完成哦！！！';
  public time = '2018-07-11';
  public listName = '进行中';
  public projectDetail: ProjectDetail;
  public userName = sessionStorage.getItem('userName');

  constructor(private route: ActivatedRoute, private router: Router, private projectService: ProjectsService) {
  }

  ngOnInit() {
    this.getProjectDetail();
  }

  /**
   * 获取项目详情
   */
  getProjectDetail() {
    if (this.route.snapshot.paramMap.has('id')) {
      this.projectService
        .getProjectDetail(this.route.snapshot.paramMap.get('id'))
        .subscribe(response => {
          this.projectDetail = response;
        });
    }
  }

  /**
   * 页面跳转
   * @param {string} id 跳转路径
   */
  goToPage(id) {
    this.router.navigate(['projects/todo', id]);
  }
}
