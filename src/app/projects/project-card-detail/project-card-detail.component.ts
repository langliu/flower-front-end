import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProjectsService} from '../service/projects.service';
import {ProjectItem} from '../model/Projects';
import {TaskDetail} from '../model/TaskDetail';
import {TaskPostData} from '../model/Task';

@Component({
  selector: 'app-project-card-detail',
  templateUrl: './project-card-detail.component.html',
  styleUrls: ['./project-card-detail.component.less']
})
export class ProjectCardDetailComponent implements OnInit {
  public cardData: TaskDetail;
  public textareaDisable = false;
  public showDescript: boolean;
  public showTaskItem = false;
  public taskData: TaskPostData;

  constructor(private route: ActivatedRoute, private projectsService: ProjectsService) {
  }

  ngOnInit() {
    this.getData(this.route.snapshot.paramMap.get('id'));
    this.showDescript = !this.textareaDisable;
    this.taskData = {value: '', list_item_id: Number(this.route.snapshot.paramMap.get('id'))};
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

  showAddDescription(): void {
    this.textareaDisable = true;
    this.showDescript = false;
  }

  closeAddDescription(): void {
    this.textareaDisable = false;
    this.showDescript = true;
  }

  closeAddTask() {
    this.showTaskItem = false;
    this.taskData.value = '';
  }

  /**
   * 升级任务内容
   */
  updateCard() {
    this.projectsService
      .updateCard({description: this.cardData.item.description, list_item_id: Number(this.route.snapshot.paramMap.get('id'))})
      .subscribe(res => {
        if (res.success) {
          this.closeAddDescription();
        }
      });
  }

  addNewTask() {
    this.projectsService
      .createTask(this.taskData)
      .subscribe(response => {
        if (response.success) {
          this.getData(this.route.snapshot.paramMap.get('id'));
          this.taskData.value = '';
        }
      });
  }
}
