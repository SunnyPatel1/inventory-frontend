import { Component, OnInit, EventEmitter } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { DataService } from '../../data.service';


@Component({
  selector: 'app-component-overview',
  templateUrl: './component-overview.component.html',
  styleUrls: ['./component-overview.component.css']
})
export class ComponentOverviewComponent implements OnInit {
	detailedComponents = [];
	stockCheck = [];
	availableInventory = [];
	lowInventory = [];

	constructor(private http: HttpClient,
		private data: DataService) { }

	ngOnInit() {
		this.http.get('http://localhost:3000/views/componentDetailed/').subscribe
			( (data: any) => {
				this.detailedComponents = data;
			})
		this.http.get('http://localhost:3000/views/lowInventory/').subscribe
			( (data: any) => {
				this.lowInventory = data;
			})
		this.http.get('http://localhost:3000/views/stockCheck/').subscribe
			( (data: any) => {
				this.stockCheck = data;
			})
		this.http.get('http://localhost:3000/views/availableInventory').subscribe
			( (data: any) => {
				this.availableInventory = data;
				this.data.finishedOne()
			})
	}

}
