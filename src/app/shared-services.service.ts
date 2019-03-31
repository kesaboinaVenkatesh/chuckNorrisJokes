import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable  } from 'rxjs/Rx';
import { map } from 'rxjs/operators';

 
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SharedServicesService {
  
  constructor(private http: HttpClient) { 
  }

  getCategoryNames(url){
    return this.http.get(url);
  }
  getCategorySpecificJokes(url){
    return this.http.get(url);
  }
}
