import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import{Client} from './client'
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const url='https://ticcot-backend.herokuapp.com/api/client';
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { }

  private extractData(res: Response): any {
    const body = res;
    return body || { };
  }

  getClient():Observable<any>{
    return this.http.get<any>(url).pipe(
      map(this.extractData)
    );
  }
}
