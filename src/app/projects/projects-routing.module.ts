import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from './service/auth-guard.service';
import {ProjectListComponent} from './project-list/project-list.component';
import {MembersComponent} from './members/members.component';
import {ProjectsComponent} from './projects/projects.component';
import {CalendarsComponent} from './calendars/calendars.component';
import {ProjectCollectionComponent} from './project-collection/project-collection.component';

const routes: Routes = [
  {
    path: 'projects',
    component: ProjectsComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'members',
        component: MembersComponent
      },
      {
        path: 'projectDetail/:id',
        component: ProjectListComponent
      },
      {
        path: 'calendars',
        component: CalendarsComponent
      },
      {
        path: 'project',
        component: ProjectCollectionComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
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
