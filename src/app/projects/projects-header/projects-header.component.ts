import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-projects-header',
  templateUrl: './projects-header.component.html',
  styleUrls: ['./projects-header.component.less']
})
export class ProjectsHeaderComponent implements OnInit {
  public navItems = [
    {
      name: '项目',
      url: '/projects/project'
    },
    {
      name: '团队',
      url: '/projects/members'
    }
  ];
  public activeNavItem = '项目';

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  /**
   * 页面跳转
   * @param {string} url 跳转路径
   */
  goToPage(url, activeName) {
    this.router.navigate([url]);
    this.activeNavItem = activeName;
  }
}
