import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProjectsService} from '../service/projects.service';
import {ProjectItem} from '../model/Projects';
import {TaskDetail} from '../model/TaskDetail';

@Component({
  selector: 'app-project-card-detail',
  templateUrl: './project-card-detail.component.html',
  styleUrls: ['./project-card-detail.component.less']
})
export class ProjectCardDetailComponent implements OnInit {
  public cardData: TaskDetail;
  public textareaDisable = true;

  constructor(private route: ActivatedRoute, private projectsService: ProjectsService) {
  }

  ngOnInit() {
    this.getData(this.route.snapshot.paramMap.get('id'));
  }

  getData(id: string) {
    this.projectsService.getCardDetail(id).subscribe(response => {
      this.cardData = response;
      console.log(this.cardData);
    });
  }

  completeTask(cardId: number): void {
    // 阻止事件冒泡
    event.stopPropagation();
    console.log(cardId);
    this.projectsService
      .itemAccomplished(cardId)
      .subscribe(response => {
        console.log(response);
      });
  }

  /**
   * 完成检查项
   * @param {number} id
   */
  taskComplete(id: number) {
    this.projectsService.taskComplete(id).subscribe(res => {
      if (res.success) {
        this.cardData.progress = res.progress;
      }
    });
  }
}
