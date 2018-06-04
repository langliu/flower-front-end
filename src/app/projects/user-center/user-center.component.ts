import {Component, OnInit} from '@angular/core';
import {ProjectsService} from '../service/projects.service';
import {User} from '../model/Users';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-center',
  templateUrl: './user-center.component.html',
  styleUrls: ['./user-center.component.less']
})
export class UserCenterComponent implements OnInit {
  public username = '刘浪';
  public user_id: string;
  email = '809721414@qq.com';
  phoneNumber = '18328073611';
  public user: User = {
    avatar: null, username: null, user_id: null, phone_number: null, email: null
  };

  constructor(private projectsService: ProjectsService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.user_id = this.route.snapshot.paramMap.get('userId');
    this.getUserInfo();
  }

  getUserInfo() {
    this.projectsService.getUserInfo(this.user_id).subscribe(res => {
      if (res.success) {
        this.user = res.user;
      }
    });
  }

  changeUsername() {
    this.projectsService.changeUsername(this.user)
      .subscribe(res => {
        console.log(res);
      });
  }

}
