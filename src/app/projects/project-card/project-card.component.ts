import {Component, OnInit, Input} from '@angular/core';
import {ProjectsService} from '../service/projects.service';

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
  @Input() cardId: string;

  constructor(private projectsService: ProjectsService) {
  }

  ngOnInit() {
  }

  console(cardId: string): void {
    // 阻止事件冒泡
    event.stopPropagation();
    console.log(cardId);
    this.projectsService
      .itemAccomplished(cardId)
      .subscribe(response => {
        console.log(response);
      });
  }
}
