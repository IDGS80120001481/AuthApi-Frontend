import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { UserDetailAll } from '../../interfaces/user-detail-all';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  authService = inject(AuthService);
  user$ = this.authService.getAllSelect();
}
