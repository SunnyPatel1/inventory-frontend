import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataRetrieveService {


  constructor(private http: HttpClient) {
  }

  getComponents() {
  	return this.http.get('http://localhost:3000/api/components/');
  }

  addComponent(json) {
    return this.http.post('http://localhost:3000/api/components/', json);
  }

  getComponentInventory() {
  	return this.http.get('http://localhost:3000/api/componentInventory/');
  }

  addComponentInventory(json) {
    return this.http.post('http://localhost:3000/api/componentInventory/', json);
  }

  deleteComponent(id) {
  	return this.http.delete('http://localhost:3000/api/components/' + id);
  }

  deleteComponentInventory(json) {
  	return this.http.request('delete', 'http://localhost:3000/api/componentInventory/', {body : json});
  }

  getManufacturers() {
  	return this.http.get('http://localhost:3000/api/manufacturer/');
  }

  newManufacturer(json) {
    console.log(json);
    return this.http.post('http://localhost:3000/api/manufacturer/', json)
  }

  getBoards() {
  	return this.http.get('http://localhost:3000/api/boards/');
  }

  addBoard(json) {
    return this.http.post('http://localhost:3000/api/boards/', json);
  }

  getBoardInventory() {
  	return this.http.get('http://localhost:3000/api/boardInventory');
  }

  addBoardInventory(json) {
    return this.http.post('http://localhost:3000/api/boardInventory/', json);
  }

  getJobs() {
  	return this.http.get('http://localhost:3000/api/buildJobs/');
  }

  startJob(json) {
  	return this.http.request('post','http://localhost:3000/api/sendOut/', {body : json} );
  }

  finishJob(json) {
  	return this.http.request('put', 'http://localhost:3000/api/logReturn/', {body : json} );
  }

  getBoms() {
    return this.http.get('http://localhost:3000/api/bom');
  }

  getAssemblers() {
    return this.http.get('http://localhost:3000/api/assembler/')
  }

  newAss(json) {
    console.log(json);
    return this.http.post('http://localhost:3000/api/assembler/',json)
  }


}
