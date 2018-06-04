import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {ProjectsRoutingModule} from './projects-routing.module';

import {ProjectsService} from './service/projects.service';
import {AuthGuard} from './service/auth-guard.service';

import {ProjectListComponent} from './project-list/project-list.component';
import {ProjectCardComponent} from './project-card/project-card.component';
import {MembersComponent} from './members/members.component';
import {ProjectsComponent} from './projects/projects.component';
import {ProjectsHeaderComponent} from './projects-header/projects-header.component';
import {CalendarsComponent} from './calendars/calendars.component';
import {ProjectCollectionComponent} from './project-collection/project-collection.component';
import {ProjectCardDetailComponent} from './project-card-detail/project-card-detail.component';
import {DataFilterPipe} from '../pipe/data-filter.pipe';
import { UserCenterComponent } from './user-center/user-center.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule,
    ProjectsRoutingModule,
  ],
  declarations: [
    ProjectListComponent,
    ProjectCardComponent,
    MembersComponent,
    ProjectsComponent,
    ProjectsHeaderComponent,
    CalendarsComponent,
    ProjectCollectionComponent,
    ProjectCardDetailComponent,
    DataFilterPipe,
    UserCenterComponent,
    MyProjectsComponent
  ],
  providers: [ProjectsService, AuthGuard]
})
export class ProjectsModule {
}
