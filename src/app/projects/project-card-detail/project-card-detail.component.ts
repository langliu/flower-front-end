import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProjectsService} from '../service/projects.service';
import {ProjectItem} from '../model/Projects';

@Component({
  selector: 'app-project-card-detail',
  templateUrl: './project-card-detail.component.html',
  styleUrls: ['./project-card-detail.component.less']
})
export class ProjectCardDetailComponent implements OnInit {
  public cardData: ProjectItem;

  constructor(private route: ActivatedRoute, private projectService: ProjectsService) {
  }

  ngOnInit() {
    this.getData(this.route.snapshot.paramMap.get('id'));
  }

  getData(id: string) {
    this.projectService.getCardDetail(id).subscribe(response => {
      this.cardData = response;
      console.log(this.cardData);
    });
  }
}
