import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule, Message } from 'primeng/message';
import { PasswordModule } from 'primeng/password';
import { InputIcon } from 'primeng/inputicon';
import { Fluid } from 'primeng/fluid';
import { AuthService } from '@app/auth/services/auth.service';

@Component({
  selector: 'app-register-page',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    ButtonModule,
    IconFieldModule,
    InputTextModule,
    PasswordModule,
    InputIcon,
    Fluid,
    Message,
  ],
  templateUrl: './register-page.html',
  styleUrl: './register-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RegisterPage {
  private router = inject(Router);
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  hasError = signal(false);
  public registerForm = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  onSubmit() {
    if (this.registerForm.invalid) {
      this.hasError.set(true);
      setTimeout(() => {
        this.hasError.set(false);
      }, 2000);
      return;
    }
    const { fullName, email, password } = this.registerForm.value;

    this.authService.register(email!, password!, fullName!).subscribe((isAuthenticated) => {
      if (isAuthenticated) {
        this.router.navigateByUrl('/dashboard');
        return;
      }

      this.hasError.set(true);
      setTimeout(() => {
        this.hasError.set(false);
      }, 2000);
    });
  }
}
