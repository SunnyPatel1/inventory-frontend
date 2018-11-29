import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-active-manufacturers',
  templateUrl: './active-manufacturers.component.html',
  styleUrls: ['./active-manufacturers.component.css']
})
export class ActiveManufacturersComponent implements OnInit {
	activeManu = [];

	constructor(private http: HttpClient,
		private data: DataService) { }

	ngOnInit(): void {
		this.data.finished2.subscribe( c => {
			this.http.get('http://localhost:3000/api/views/currentManufacturers/').subscribe
			( (data: any) => {
				this.activeManu = data;
			});
		})
	}
}
