import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-manufacturers',
  templateUrl: './manufacturers.component.html',
  styleUrls: ['./manufacturers.component.css']
})
export class ManufacturersComponent implements OnInit {
	private manufacturers = [];
	manuForm = new FormGroup({
		name: new FormControl(''),
		phone: new FormControl(''),
		country: new FormControl('')

	})

	constructor(private data: DataService) {
		this.data.getManufacturers();
		this.data.gotManufacturers.subscribe( c => this.manufacturers = this.data.manufacturers);
	}

	ngOnInit() {
	}


	newManufacturer(){

	}

}
