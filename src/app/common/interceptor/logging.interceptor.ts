import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpResponse,
    HttpHeaderResponse,
    HttpProgressEvent,
} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            tap(
                (event: HttpEvent<any>) => {
                    if (event instanceof HttpRequest) {
                        console.group('Outgoing Request');
                        console.log('URL:', event.urlWithParams);
                        console.log('Method:', event.method);
                        console.log('Headers:', event.headers);
                        console.groupEnd();
                    } else if (event instanceof HttpResponse) {
                        console.group('Incoming Response');
                        console.log('Status:', event.status);
                        console.log('Headers:', event.headers);
                        console.log('Body:', event.body); // Consider sanitizing sensitive data
                        console.groupEnd();
                    }
                },
                (error) => {
                    console.error('HTTP error:', error);
                }
            )
        );
    }
}
