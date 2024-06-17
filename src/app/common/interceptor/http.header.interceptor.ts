import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authToken = localStorage.getItem('auth_token');
        if (authToken) {
            const authReq = req.clone({ setHeaders: { Authorization: `Bearer ${authToken}` } });
            // const authReq2 = req.clone({
            //     headers: req.headers.append("Authorization", `Bearer ${authToken}`)
            // })
            return next.handle(authReq);
        }

        // Handle requests without authorization
        return next.handle(req).pipe(
            tap(evt => {
                if (evt instanceof HttpResponse) {
                    // Handle successful responses (optional)
                }
            })
        );
    }
}
