import { HttpInterceptorFn } from '@angular/common/http';

export const testingInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
