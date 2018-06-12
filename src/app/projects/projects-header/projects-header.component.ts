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
    },
    // {
    //   name: '日历',
    //   url: '/projects/calendars'
    // },
    {
      name: '我的',
      url: `/projects/myProject/${sessionStorage.getItem('userId')}`
    }
  ];
  public activeNavItem = sessionStorage.getItem('activeNavItem');

  constructor(private router: Router) {
  }

  ngOnInit() {
    sessionStorage.setItem('activeNavItem', '项目');
  }

  /**
   * 页面跳转
   * @param {string} url 跳转路径
   * @param {string} activeName 激活页面名称
   */
  goToPage(url, activeName) {
    this.router.navigate([url]);
    sessionStorage.setItem('activeNavItem', activeName);
    this.activeNavItem = sessionStorage.getItem('activeNavItem');
  }

  goToUserCenter() {
    this.router
      .navigate(['projects/user', sessionStorage.getItem('userId')])
      .then(res => {
        console.log(res);
      });
  }

  signOut() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
