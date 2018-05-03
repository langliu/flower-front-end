import {Component, OnInit} from '@angular/core';
import {ProjectsService} from '../service/projects.service';
import {NzModalService} from 'ng-zorro-antd';
import {Project} from '../model/Projects';
import {Router} from '@angular/router';

@Component({
  selector: 'app-project-collection',
  templateUrl: './project-collection.component.html',
  styleUrls: ['./project-collection.component.less']
})
export class ProjectCollectionComponent implements OnInit {
  public animalIcon = [
    'assets/images/animal/公鸡.svg',
    'assets/images/animal/刺猬.svg',
    'assets/images/animal/大象.svg',
    'assets/images/animal/奶牛.svg',
    'assets/images/animal/小鸡.svg',
    'assets/images/animal/斑马.svg',
    'assets/images/animal/河马.svg',
    'assets/images/animal/熊猫.svg',
    'assets/images/animal/牛.svg',
    'assets/images/animal/狐狸.svg',
    'assets/images/animal/狐猴.svg',
    'assets/images/animal/狮子.svg',
    'assets/images/animal/狼.svg',
    'assets/images/animal/猪.svg',
    'assets/images/animal/猫头鹰.svg',
    'assets/images/animal/老虎.svg',
    'assets/images/animal/考拉.svg',
    'assets/images/animal/螃蟹.svg',
    'assets/images/animal/鲸鱼.svg',
    'assets/images/animal/鹿.svg',
  ];
  public isVisible = false;
  public projects: Project;
  public isConfirmLoading = false;
  public project_name = '';

  constructor(
    private projectsService: ProjectsService,
    private confirmServ: NzModalService,
    private router: Router) {
  }

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this.projectsService
      .getProjects()
      .subscribe(response => {
        if (response.success) {
          this.projects = response;
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

  goToDetail(projectId) {
    this.router.navigate(['projects/projectDetail', projectId]);
  }

  showModal() {
    console.log(123);
    this.isVisible = true;
  }

  handleCancel() {
    this.isVisible = false;
  }

  handleOk() {
    this.projectsService
      .addNewProject({project_name: this.project_name})
      .subscribe(response => {
        console.log(response);
        if (response.success) {
          this.getProjects();
        }
      });
    this.isVisible = false;
    this.project_name = '';
  }
}