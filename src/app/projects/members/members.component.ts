import {Component, OnInit} from '@angular/core';
import {ProjectsService} from '../service/projects.service';
import {Users} from '../model/Users';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.less']
})
export class MembersComponent implements OnInit {
  public members: Users;

  constructor(private projectsService: ProjectsService) {
  }

  ngOnInit() {
    this.projectsService.getUsers().subscribe(response => {
      this.members = response;
    });
  }

}
