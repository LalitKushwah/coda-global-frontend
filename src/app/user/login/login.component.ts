import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import toast from 'toast-me';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import constants from '../../utility/constants';
import { AuthService } from '../../../provider/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  CONSTANTS: any = constants;
  showPassword = false;
  loginForm: FormGroup;
  constructor(
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    console.log(this.CONSTANTS);
    this.createLoginForm();
  }

  createLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      userId: ['' , Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin(): void {
    console.log(this.loginForm.value);
    this.authService.userLogin(this.loginForm.value).subscribe((responseData: any) => {
      if (responseData.status === 200) {
        toast(responseData.message , { duration: constants.toast.timeout });
        localStorage.setItem('userId', this.loginForm.value.userId);
        this.loginForm.reset();
        this.router.navigate(['/home']);
      } else {
        toast(responseData.message, { duration: constants.toast.timeout }
        );
      }
    }, err => {
      const status = err.status;
      toast(this.CONSTANTS.HTTP_STATUS_MESSAGE_MAP[status], { duration: constants.toast.timeout });
    });
  }

  createNewAccount(): void {
    toast('This functionality is not is scope of assignment', { duration: constants.toast.timeout });
  }

  togglePasswordView(): void {
    this.showPassword = !this.showPassword;
  }
}
