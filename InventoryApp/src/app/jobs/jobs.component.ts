import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
	private jobs = [];
	private boards = [];
	private showModal = false;
	private returnId = null;
	newJobForm = new FormGroup({
		compid: new FormControl(''),
		qsent: new FormControl(''),
		bcode: new FormControl(''),
	})
	returnForm = new FormGroup({
		qret: new FormControl(''),
		sn: new FormControl('')
	})
	constructor(private data: DataService) {
		this.data.getJobs();
		this.data.getBoards();
		this.data.gotJobs.subscribe( c => this.jobs = this.data.jobs);
		this.data.gotBoards.subscribe( c => this.boards = this.data.boards);
	}

	ngOnInit() {
	}

	createJob() {
		var max = 0;

		for (var x of this.jobs){
			if (max < x.jobid){
				max = x.jobid;
			}
		}

		max = max + 1;

		let formObj = this.newJobForm.getRawValue();
		formObj.jobid = max;

		console.log(formObj)
	}

	logReturn(id: number) {
		this.showModal = !this.showModal;
		this.returnId = id;
	}

	finishJob() {
		
	}

}
