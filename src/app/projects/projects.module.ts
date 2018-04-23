import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {ProjectsRoutingModule} from './projects-routing.module';

import {ProjectsService} from './service/projects.service';

import {ProjectListComponent} from './project-list/project-list.component';
import {ProjectCardComponent} from './project-card/project-card.component';
import {MembersComponent} from './members/members.component';
import {ProjectsComponent} from './projects/projects.component';
import {ProjectsHeaderComponent} from './projects-header/projects-header.component';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    ProjectsRoutingModule,
  ],
  declarations: [
    ProjectListComponent,
    ProjectCardComponent,
    MembersComponent,
    ProjectsComponent,
    ProjectsHeaderComponent
  ],
  providers: [ProjectsService]
})
export class ProjectsModule {
}
