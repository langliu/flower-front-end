import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProjectListComponent} from './project-list/project-list.component';
import {MembersComponent} from './members/members.component';
import {ProjectsComponent} from './projects/projects.component';

const routes: Routes = [
  {
    path: 'projects',
    component: ProjectsComponent,
    children: [
      {
        path: 'members',
        component: MembersComponent
      },
      {
        path: 'project',
        component: ProjectListComponent
      }
    ]
  },
  {
    path: '',
    component: ProjectsComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {
}
