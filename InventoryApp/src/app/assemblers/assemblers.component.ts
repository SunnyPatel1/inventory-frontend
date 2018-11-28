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

}
