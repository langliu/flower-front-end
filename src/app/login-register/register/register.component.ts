import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {LogInRegisterService} from '../../log-in-register.service';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less'],
})
export class RegisterComponent implements OnInit {
  validateForm: FormGroup;
  isVisible = true;
  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return {required: true};
    } else if (control.value !== this.validateForm.controls['password'].value) {
      return {confirm: true, error: true};
    }
  };
  agreeValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return {required: true};
    } else if (control.value !== true) {
      return {confirm: true, error: true};
    }
  };

  _submitForm() {
    for (const i of Object.keys(this.validateForm.controls)) {
      this.validateForm.controls[i].markAsDirty();
    }
    if (this.validateForm.valid) {
      this.logInRegisterService
        .register(this.validateForm.value)
        .subscribe(response => {
          if (response.status === 'fail') {
            this._message.error(response.reason);
          } else {
            this.isVisible = true;
          }
        });
    }
  }

  constructor(
    private fb: FormBuilder,
    private logInRegisterService: LogInRegisterService,
    private _message: NzMessageService,
    private nzModalService: NzModalService,
    private router: Router) {
  }

  updateConfirmValidator() {
    /** wait for refresh value */
    setTimeout(_ => {
      this.validateForm.controls['checkPassword'].updateValueAndValidity();
    });
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      email: [null, [Validators.email]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      userName: [null, [Validators.required]],
      phoneNumber: [null, [Validators.required]],
      agree: [false, [Validators.required, this.agreeValidator]],
    });
  }

  getFormControl(name) {
    return this.validateForm.controls[name];
  }

  handleCancel() {
    this.isVisible = false;
  }

  login() {
    this.router.navigate(['/login'])
      .then((res) => {
        console.log(res);
      });
  }
}
