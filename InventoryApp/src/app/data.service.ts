import { Injectable, OnInit, EventEmitter } from '@angular/core';
import { DataRetrieveService } from './data-retrieve.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
	gotComponents: EventEmitter<any> = new EventEmitter();
  gotComponentInventory: EventEmitter<any> = new EventEmitter();
  gotManufacturers: EventEmitter<any> = new EventEmitter();
  gotBoards: EventEmitter<any> = new EventEmitter();
  gotBoardInventory: EventEmitter<any> = new EventEmitter();
  gotJobs: EventEmitter<any> = new EventEmitter();
  gotBoms: EventEmitter<any> = new EventEmitter();
	public components = ['1'];
	public componentInventory = [];
  public manufacturers = [];
  public boards = [];
  public boardInventory = [];
  public jobs = [];
  public boms = [];

  	constructor(private dataGrab : DataRetrieveService) { 
  	}

  	getComponents() {
  		this.dataGrab.getComponents()
  		.subscribe( (data: any) => {
  			this.components = data;
  			console.log(this.components);
  			this.gotComponents.emit("done");
  		} )
  	}


    getComponentInventory() {
      this.dataGrab.getComponentInventory()
      .subscribe( (data: any) => {
        this.componentInventory = data;
        console.log(this.componentInventory);
        this.gotComponentInventory.emit("done");
      } )
    }

    deleteComponent(id: number){
      this.dataGrab.deleteComponent(id)
      .subscribe( (data: any) => {
        this.getComponents();
        this.getComponentInventory();
      } )
    }

    deleteComponentInventory(json){
      this.dataGrab.deleteComponentInventory(json)
      .subscribe( (data: any) => {
        this.getComponentInventory();
        this.getComponents();
      })
    }

    getManufacturers(){
      this.dataGrab.getManufacturers()
      .subscribe( (data: any) => {
        this.manufacturers = data;
        console.log(this.manufacturers);
        this.gotManufacturers.emit("done");
      } )
    }

    getBoards(){
      this.dataGrab.getBoards()
      .subscribe( (data: any) => {
        this.boards = data;
        console.log(this.boards);
        this.gotBoards.emit("done");
      } )
    }

    getBoardInventory(){
      this.dataGrab.getBoardInventory()
      .subscribe( (data: any) => {
        this.boardInventory = data;
        console.log(this.boardInventory);
        this.gotBoardInventory.emit("done");
      } )
    }

    getJobs(){
      this.dataGrab.getJobs()
      .subscribe( (data: any) => {
        this.jobs = data;
        console.log(this.jobs);
        this.gotJobs.emit("done");
      } )
    }

    getBoms(){
      this.dataGrab.getBoms()
      .subscribe( (data: any) => {
        this.boms = data;
        console.log(this.boms);
        this.gotBoms.emit("done");
      })
    }


}
