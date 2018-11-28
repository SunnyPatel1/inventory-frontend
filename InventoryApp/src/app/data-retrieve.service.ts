import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataRetrieveService {


  constructor(private http: HttpClient) {
  }

  getComponents() {
  	return this.http.get('http://localhost:3000/components/');
  }

  getComponentInventory() {
  	return this.http.get('http://localhost:3000/componentInventory/');
  }

  deleteComponent(id) {
  	return this.http.delete('http://localhost:3000/components/' + id);
  }

  deleteComponentInventory(json) {
  	return this.http.request('delete', 'http://localhost:3000/componentInventory/', {body : json});
  }

  getManufacturers() {
  	return this.http.get('http://localhost:3000/manufacturer/')
  }

  getBoards() {
  	return this.http.get('http://localhost:3000/boards/')
  }

  getBoardInventory() {
  	return this.http.get('http://localhost:3000/boardInventory')
  }

  getJobs() {
  	return this.http.get('http://localhost:3000/buildJobs/')
  }

  startJob(json) {
  	return this.http.request('post','http://localhost:3000/sendOut/', {body : json} )
  }

  finishJob(json) {
  	return this.http.request('put', 'http://localhost:3000/logReturn/', {body : json} )
  }

  getBoms() {
    return this.http.get('http://localhost:3000/bom');
  }
}
