import { Injectable } from '@angular/core';
import{HttpClient,HttpErrorResponse,HttpHeaders}from '@angular/common/http'
import { catchError } from 'rxjs/operators';
import { Observable,throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentCrudService {

  student_api="http://localhost:3000/student-data";
  headers = new HttpHeaders().set('Content-Type', 'application/json'); 
  constructor(private http:HttpClient) { }
  handleError(error1: HttpErrorResponse) { 
  if (error1.error instanceof ErrorEvent) { 
  console.error('An error occurred:', error1.error.message); 
  } else { 
  console.error( 
  `Backend returned code ${error1.status}, ` +
  `body was: ${error1.error}`); 
  } 
  return throwError( 
  'Something bad happened; please try again later.'); 
  }
  create(data:any):Observable<any>{
  let myapi=`${this.student_api}`;
  return this.http.post(myapi,data)
  .pipe( 
  catchError(this.handleError) 
  ) 
  }
  list() { 
  return this.http.get(`${this.student_api}`); 
  } 
update(id:any,data:any):Observable<any>{
  let myapi=`${this.student_api}/${id}`;
  return this.http.put(myapi,data,{headers:this.headers}).pipe(catchError(this.handleError))
}
delete(id:any):Observable<any>{
  let myapi=`${this.student_api}/${id}`;
  return this.http.delete(myapi).pipe(
  catchError(this.handleError)
  )
}
}
