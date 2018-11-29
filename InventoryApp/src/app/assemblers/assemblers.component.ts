import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-assemblers',
  templateUrl: './assemblers.component.html',
  styleUrls: ['./assemblers.component.css']
})
export class AssemblersComponent implements OnInit {
	private assemblers = [];
	assForm = new FormGroup({
		name: new FormControl(''),
		phone: new FormControl(''),
		country: new FormControl('')
	})

	constructor(private data: DataService) { 
		this.data.getAssemblers();
		this.data.gotAssemblers.subscribe( c => this.assemblers = this.data.assemblers);
	}

	ngOnInit() {
	}

	newAss() {
		var max = 0;

		for (let x of this.assemblers){
			if (x.id > max) {
				max = x.id
			}
		}

		max = max + 1;

		let formObj = this.assForm.getRawValue();
		formObj.id = max;

		this.data.newAss(formObj)
	}

}
