import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {
	private components = [];
	private componentInventory = [];
	private manufacturers = [];
	componentForm = new FormControl('');
	inventoryForm = new FormControl('');

	constructor(private data: DataService) {
		this.data.getComponents();
		this.data.getComponentInventory();
		this.data.getManufacturers();
		this.data.gotComponents.subscribe( c => this.components = this.data.components);
		this.data.gotComponentInventory.subscribe(c => this.componentInventory = this.data.componentInventory);
		this.data.gotManufacturers.subscribe(c => this.manufacturers = this.data.manufacturers);
	}

	ngOnInit() {
	}

	deleteComponent(id: number){
		console.log(id);
		this.data.deleteComponent(id);
	}

	deleteComponentInventory(code: string, id: number){
		var json = {"code" : code, "cid" : id};
		console.log(json);
		this.data.deleteComponentInventory(json);
	}

}
