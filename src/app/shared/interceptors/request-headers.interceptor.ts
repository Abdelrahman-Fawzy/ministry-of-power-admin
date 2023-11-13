import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestHeadersInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const newRequest = request.clone({
      headers: 
        request.headers
        .append('Accept', 'application/json')
        .append('Authorization', localStorage.getItem('adminUser') ? `Bearer ${localStorage.getItem('adminUser')!}` : '')
        
    })
    
    return next.handle(newRequest);
  }
}
