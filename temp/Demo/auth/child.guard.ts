import { CanActivateFn } from '@angular/router';

export const childGuard: CanActivateFn = (route, state) => {
  console.log({ route, state }, 'childGuard');

  return true;
};
