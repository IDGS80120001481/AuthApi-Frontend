import { inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const matSnackbar = inject(MatSnackBar);

  if (inject(AuthService).isLoggedIn()) {
    return true;
  }

  matSnackbar.open('Debes iniciar sesion para ver esto', 'Ok', {
    duration: 3000,
    verticalPosition: 'top',
    horizontalPosition: 'center',
  });
  inject(Router).navigate(['/']);
  return false;
};
