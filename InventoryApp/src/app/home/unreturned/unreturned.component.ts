import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-unreturned',
  templateUrl: './unreturned.component.html',
  styleUrls: ['./unreturned.component.css']
})
export class UnreturnedComponent implements OnInit {
	unreturnedJobs = []

	constructor(private http: HttpClient) { }

	ngOnInit(): void {
		this.http.get('http://localhost:3000/views/unreturned/').subscribe
			( (data: any) => {
				this.unreturnedJobs = data;
			})
	}

}
