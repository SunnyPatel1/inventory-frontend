import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {
	public components = [];
	public componentInventory = [];
	public manufacturers = [];
	componentForm = new FormGroup({
		name: new FormControl(''),
		msl: new FormControl(''),
		unitcost: new FormControl(''),
		mid: new FormControl(''),
		amt: new FormControl('')
	})

	inventoryForm = new FormGroup({
		code: new FormControl(''),
		cid: new FormControl(''),
		amt: new FormControl(''),
	})

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

	onSubmitComponent() {
		var max = 0;
		for (let x of this.components){
			if (x.componentid >= max) {
				max = x.componentid
			}
		}
		max = max + 1;

		let formObj = this.componentForm.getRawValue();
		formObj.id = max;

		console.log(formObj);
		this.data.addComponent(formObj);
	}

	onSubmitInventory() {
		this.data.addComponentInventory(this.inventoryForm.value);
	}

}
