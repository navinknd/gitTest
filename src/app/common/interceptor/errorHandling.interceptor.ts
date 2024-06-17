import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpResponse,
    HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private toastrService: ToastrService) { }
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            retry(1),
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401) {
                    // Handle unauthorized errors (e.g., redirect to login)
                    console.error('Unauthorized request');
                    this.toastrService.error('Authentication failed. Please login.');
                } else if (error.error instanceof ErrorEvent) {
                    // Extract and display user-friendly error messages
                    console.error('API error:', error.error.message);
                    this.toastrService.error(error.error.message);
                } else {
                    // Handle other unexpected errors
                    console.error('An unexpected error occurred:', error);
                    this.toastrService.error('An error occurred. Please try again later.');
                }
                return throwError(() => error);
            })
        );
    }
}
