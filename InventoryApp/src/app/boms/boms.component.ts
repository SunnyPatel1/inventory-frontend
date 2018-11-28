import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-boms',
  templateUrl: './boms.component.html',
  styleUrls: ['./boms.component.css']
})
export class BomsComponent implements OnInit {
	private boms = [];

	constructor(private data : DataService) {
		this.data.getBoms();
		this.data.gotBoms.subscribe(c => this.boms = this.data.boms);
	}

	ngOnInit() {
	}

}
