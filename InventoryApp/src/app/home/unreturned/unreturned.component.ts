import { Component, OnInit, EventEmitter } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-unreturned',
  templateUrl: './unreturned.component.html',
  styleUrls: ['./unreturned.component.css']
})
export class UnreturnedComponent implements OnInit {
	unreturnedJobs = [];
	costlyboards = [];
	mostExpensive = [];
	numExpensiveBoards = [];
	byManu = [];

	constructor(private http: HttpClient,
		private data: DataService) { }

	ngOnInit(): void {
		this.data.finished1.subscribe( c => {
			this.http.get('http://localhost:3000/api/views/unreturned/').subscribe
			( (data: any) => {
				this.unreturnedJobs = data;
			});
			this.http.get('http://localhost:3000/api/views/costlyboards/').subscribe
				( (data: any) => {
					this.costlyboards = data;
			})
			this.http.get('http://localhost:3000/api/views/mostExpensiveBoard/').subscribe
				( (data: any) => {
					this.mostExpensive = data;
			})
			this.http.get('http://localhost:3000/api/views/numExpensiveBoards').subscribe
				( (data: any) => {
					this.numExpensiveBoards = data;
					this.data.finishedTwo();
			})
			this.http.get('http://localhost:3000/api/views/boardsFromAsus').subscribe
				( (data: any) => {
					this.byManu = data;
					this.data.finishedTwo();
			})
		})
		
	}

}
