import { CanActivateFn } from '@angular/router';

export const nologinGuard: CanActivateFn = (route, state) => {
  return true;
};
