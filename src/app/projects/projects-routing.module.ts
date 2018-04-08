import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProjectListComponent} from './project-list/project-list.component';

const routes: Routes = [
  {
    path: 'projects/project',
    component: ProjectListComponent,
  },
  {
    path: '',
    component: ProjectListComponent,
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
