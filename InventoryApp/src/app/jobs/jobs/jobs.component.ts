import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
	private jobs = [];
	private boards = [];
	constructor(private data: DataService) {
		this.data.getJobs();
		this.data.getBoards();
		this.data.gotJobs.subscribe( c => this.jobs = this.data.jobs);
		this.data.gotBoards.subscribe( c => this.boards = this.data.boards);
	}

	ngOnInit() {
	}

}
