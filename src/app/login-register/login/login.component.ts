import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {LogInRegisterService} from '../../log-in-register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;

  _submitForm(): void {
    for (const i of Object.keys(this.validateForm.controls)) {
      this.validateForm.controls[i].markAsDirty();
    }
    console.log(this.validateForm.value);
    const submitData = this.validateForm.value;
    delete submitData.remember;
    this.logInRegister.login(submitData).subscribe(response => {
      if (response.success) {
        sessionStorage.setItem('token', response.user.token);
        sessionStorage.setItem('username', response.user.username);
        sessionStorage.setItem('email', response.user.email);
        if (response.user.active_team) {
          sessionStorage.setItem('active_team', response.user.active_team.toString());
        }
        this.router.navigate(['/projects/project']);
      }
    });
  }

  constructor(private fb: FormBuilder, private logInRegister: LogInRegisterService, private router: Router) {
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true],
    });
  }

}
