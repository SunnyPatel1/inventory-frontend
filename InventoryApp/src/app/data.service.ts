import { Injectable, OnInit, EventEmitter } from '@angular/core';
import { DataRetrieveService } from './data-retrieve.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
	gotComponents: EventEmitter<any> = new EventEmitter();
	public components = ['1'];
	public componentInventory = [];

  	constructor(private dataGrab : DataRetrieveService) { 
  		this.getData()
  	}

  	getData() {
  		this.dataGrab.getComponents()
  		.subscribe( (data: any) => {
  			this.components = data;
  			console.log(this.components);
  			this.gotComponents.emit("done");
  		} )
  	}

  	getComponents() {
  		return this.components;
  	}
}
