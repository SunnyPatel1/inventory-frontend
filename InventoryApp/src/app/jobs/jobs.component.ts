import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormArray, FormGroup, FormControl } from '@angular/forms';

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
	private trial = [];
	newJobForm = new FormGroup({
		compid: new FormControl(''),
		qsent: new FormControl(''),
		bcode: new FormControl(''),
	})

	qret = new FormControl('');

	

	

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

	enterNum(){
		for (var x = 0; x < this.qret.value; x++){
			console.log(x)
			this.trial.push(x)
		}

		
	}

	retJob() {

	}

}
