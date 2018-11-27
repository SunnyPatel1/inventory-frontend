import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataRetrieveService {

  constructor(private http: HttpClient) {
  }

  getComponents() {
  	return this.http.get('http://localhost:3000/components/');
  }
}
