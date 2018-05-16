import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProjectsService} from '../service/projects.service';
import {NewCard, ProjectDetail} from '../model/Projects';

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
  public isVisible = false;
  public isOkLoading = false;
  public userName = sessionStorage.getItem('userName');
  public postData: NewCard = {title: '', project_list_id: 0};

  constructor(private route: ActivatedRoute, private router: Router, private projectService: ProjectsService) {
  }

  ngOnInit() {
    this.getProjectDetail();
  }

  /**
   * 获取项目详情
   */
  getProjectDetail(): void {
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
  goToPage(id): void {
    this.router.navigate(['projects/todo', id]);
  }

  showModal(project_list_id: number): void {
    this.postData.project_list_id = project_list_id;
    this.isVisible = true;
  }


  handleCancel(): void {
    this.isVisible = false;
  }

  handleOk(): void {
    this.isOkLoading = true;
    this.projectService
      .createNewCard(this.postData)
      .subscribe(response => {
        if (response.success) {
          this.isVisible = false;
          this.isOkLoading = false;
          this.getProjectDetail();
          this.postData.title = '';
        }
      });
    // window.setTimeout(() => {
    //   this.isVisible = false;
    //   this.isOkLoading = false;
    // }, 3000);
  }

}
