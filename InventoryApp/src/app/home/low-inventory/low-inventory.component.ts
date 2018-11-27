import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-low-inventory',
  templateUrl: './low-inventory.component.html',
  styleUrls: ['./low-inventory.component.css']
})
export class LowInventoryComponent implements OnInit {
	private lowComponents = []

  	constructor(private http: HttpClient) { }

	ngOnInit(): void {
		this.http.get('http://localhost:3000/views/lowInventory/').subscribe
			( (data: any) => {
				this.lowComponents = data;
			})
	}
}

