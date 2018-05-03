import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProjectsService} from '../service/projects.service';

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

  constructor(private route: ActivatedRoute, private router: Router, private projectService: ProjectsService) {
  }

  ngOnInit() {
    if (this.route.snapshot.paramMap.has('id')) {
      this.projectService
        .getProjectDetail(this.route.snapshot.paramMap.get('id'))
        .subscribe(response => {
          console.log(response);
        });
    }
  }

  /**
   * 页面跳转
   * @param {string} url 跳转路径
   */
  goToPage(url) {
    this.router.navigate([url]);
  }
}
