import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class HttpErrorInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
        .pipe(
            retry(1),
            catchError((err: HttpErrorResponse) => {
                console.log(err);
                let errorMessage = '';
                if (err.error instanceof ErrorEvent) {
                    errorMessage = 'Falha de comunicação com o servidor';
                } 
                else if (err.status === 0) {
                    errorMessage = 'O servidor está inativo';
                }
                else {
                    errorMessage = `O servidor retornou o erro ${err.message}`;
                }
                alert(errorMessage);
                return throwError(errorMessage);
            })
        );

    }
}
