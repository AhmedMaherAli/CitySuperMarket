import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { delay, finalize, Observable } from "rxjs";
import { BusyService } from "../services/busy.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor{
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token=localStorage.getItem('token');
        if(token){
            req=req.clone({
                setHeaders:{
                    Authorization: `Bearer ${token}`
                }
            });
        }
        return next.handle(req);
    }
    
}