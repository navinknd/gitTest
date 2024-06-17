import { CanActivateChildFn, CanActivateFn } from '@angular/router';

export const parentGuard: CanActivateChildFn = (route, state) => {
  console.log({ route, state }, 'parentGuard');
  if (localStorage.getItem('token')) {
    return true
  } else {
    return false
  }
};
