import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent implements OnInit {
	private boards = [];
	private boardInventory = [];
	boardForm = new FormGroup({
		desc: new FormControl(''),
		cost: new FormControl('')
	})

	constructor(private data: DataService) {
		this.data.getBoards();
		this.data.getBoardInventory();
		this.data.gotBoards.subscribe( c => this.boards = this.data.boards);
		this.data.gotBoardInventory.subscribe(c => this.boardInventory = this.data.boardInventory);
	}

	ngOnInit() {
	}

	onSubmitBoard() {
		var max = 0;
		for (var x of this.boards) {
			if (x.boardcode > max){
				max = x.boardcode;
			}
		}
		max = max + 1;

		let formObj = this.boardForm.getRawValue();
		formObj.code = max;

		console.log(formObj)
		this.data.addBoard(formObj);
	}

}
