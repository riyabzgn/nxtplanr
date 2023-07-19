import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { faEye, faEyeSlash, faRightToBracket, faLock, faLockOpen, faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import { ToastrService,ActiveToast  } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isSubmitted = false;
  passwordVisible: boolean = false;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  faRightToBracket = faRightToBracket;
  faLock = faLock;
  faLockOpen = faLockOpen;
  isLogged = false;
  isLoading = false;
  faEnvelope = faEnvelope;
  faKey = faKey;
  activeErrorToast: ActiveToast<any> | null = null;


  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private toastr: ToastrService 
  ) { }

  ngOnInit() {
    // Check if the user is already logged in
    if (sessionStorage.getItem('authKey')) {
      this.isLogged = true;
      this.router.navigate(['/activity']);
    }

    this.loginForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'
          ),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          // Validators.pattern(
          //   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/
          // ),
        ],
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

      this.isLoading = true;


      this.loginService.login(payload).subscribe({
        next: (res: any) => {
          console.log('res', res);
          if (res) {
            this.loginService.setAuthKeyInStorage(res?.body?.token);
            this.isLogged = true;

            this.toastr.success('<h6>You are Logged in successfully!</h6>', 'Welcome to nxtPlanR', {
          
              progressBar: true,
              timeOut: 2000, 
              enableHtml: true, 
              toastClass: 'toast-success',
            });
  
            setTimeout(() => {
              this.isLoading = false;
       
              this.router.navigate(['/activity/list']);
            }, 1000);
          } else {
            console.log('Unauthorized user');
            this.isLoading = false;
          }
        },
        error: (err) => {
          console.log('err', err);
          this.isLoading = false;
          if (this.activeErrorToast) {
            this.activeErrorToast.toastRef.close();
          }
          this.activeErrorToast = this.toastr.error(
            'Failed to authenticate. Please log in with the registered login information.',
            'Login Failed',
            {
            
              progressBar: true,
              timeOut: 5000,
              enableHtml: true,
              toastClass: 'toast-error', 
            }
          );
        },
      });
      // Simulate a 3-second delay before sending the login request
    }
  }
}
