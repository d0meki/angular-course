import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  imports: [RouterOutlet],
  template: `<div class="flex items-center justify-center min-h-screen">
    <div class="w-full max-w-xs bg-slate-100 shadow-2xl rounded-lg p-4">
      <h1 class="text-2xl font-montserrat font-bold text-secondary text-center mb-2">
        Autenticación
      </h1>

      <router-outlet />
    </div>
  </div> `,
  styleUrl: './auth-layout.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthLayout {}
