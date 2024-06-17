import { CanActivateFn } from '@angular/router';

export const matchGuard: CanActivateFn = (route, state) => {
  console.log({ route, state }, 'matchGuard');
  return true;
};
