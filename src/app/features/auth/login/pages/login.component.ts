import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isSubmitted = false;
  passwordVisible: boolean = false;

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    // Check if yser is already loged in


    if (sessionStorage['authKey']) {
<<<<<<< Updated upstream
      this.router.navigate(['/activity']);
=======
      this.router.navigate(['/company/list']);
>>>>>>> Stashed changes
    }

    this.loginForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          // Validators.pattern(
          //   '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'
          // ),
        ],
      ],
      password: [
        '',
        // [
           Validators.required,
        //   Validators.pattern(
        //     /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/
        //   ),
        // ],
      ],
    });
  }

  onFormSubmit() {
    this.isSubmitted = true;

    if (this.loginForm.valid) {
      const payload = {
        ...this.loginForm.value,
        userType: 'ROLE_ADMIN',
        fcmToken: 'jbssdcmnjnj345kjbkbi45'
      };

      this.loginService.login(payload).subscribe({
        next: (res: any) => {
          console.log('res', res);
          if (res) {
            this.loginService.setAuthKeyInStorage(res?.body?.token);
<<<<<<< Updated upstream
            this.router.navigate(['/activity']);
=======
            this.router.navigate(['/company']);
>>>>>>> Stashed changes
          } else {
            console.log('Unauthorized user');
          }
        },
        error: (err) => console.log('err', err),
      });
    }
  }
}
