import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {ProjectsRoutingModule} from './projects-routing.module';
import {ProjectListComponent} from './project-list/project-list.component';
import {ProjectCardComponent} from './project-card/project-card.component';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    ProjectsRoutingModule,
  ],
  declarations: [ProjectListComponent, ProjectCardComponent],
})
export class ProjectsModule {
}
