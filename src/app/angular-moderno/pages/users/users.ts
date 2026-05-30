import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersService } from '@app/angular-moderno/services/users.service';
import { Tittle } from '@app/angular-moderno/shared/tittle/tittle';

@Component({
  selector: 'app-users',
  imports: [Tittle, CommonModule, RouterModule],
  templateUrl: './users.html',
  styleUrl: './users.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Users {
  public usersService = inject(UsersService);
}
