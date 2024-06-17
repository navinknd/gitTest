import { CanDeactivateFn } from '@angular/router';

export const unSavedGuard: CanDeactivateFn<any> = (route, state) => {
  console.log({ route, state }, 'unSavedGuard');
  const result = confirm('Are you want to leave?')
  return result;
};
