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

  addComponent(json) {
    return this.http.post('http://localhost:3000/components/', json);
  }

  getComponentInventory() {
  	return this.http.get('http://localhost:3000/componentInventory/');
  }

  addComponentInventory(json) {
    return this.http.post('http://localhost:3000/componentInventory/', json);
  }

  deleteComponent(id) {
  	return this.http.delete('http://localhost:3000/components/' + id);
  }

  deleteComponentInventory(json) {
  	return this.http.request('delete', 'http://localhost:3000/componentInventory/', {body : json});
  }

  getManufacturers() {
  	return this.http.get('http://localhost:3000/manufacturer/');
  }

  newManufacturer(json) {
    console.log(json);
    return this.http.post('http://localhost:3000/manufacturer/', json)
  }

  getBoards() {
  	return this.http.get('http://localhost:3000/boards/');
  }

  addBoard(json) {
    return this.http.post('http://localhost:3000/boards/', json);
  }

  getBoardInventory() {
  	return this.http.get('http://localhost:3000/boardInventory');
  }

  addBoardInventory(json) {
    return this.http.post('http://localhost:3000/boardInventory/', json);
  }

  getJobs() {
  	return this.http.get('http://localhost:3000/buildJobs/');
  }

  startJob(json) {
  	return this.http.request('post','http://localhost:3000/sendOut/', {body : json} );
  }

  finishJob(json) {
  	return this.http.request('put', 'http://localhost:3000/logReturn/', {body : json} );
  }

  getBoms() {
    return this.http.get('http://localhost:3000/bom');
  }

  getAssemblers() {
    return this.http.get('http://localhost:3000/assembler/')
  }

  newAss(json) {
    console.log(json);
    return this.http.post('http://localhost:3000/assembler/',json)
  }


}
