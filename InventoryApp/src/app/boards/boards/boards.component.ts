import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';


@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent implements OnInit {
	private boards = [];
	private boardInventory = [];
	constructor(private data: DataService) {
		this.data.getBoards();
		this.data.getBoardInventory();
		this.data.gotBoards.subscribe( c => this.boards = this.data.boards);
		this.data.gotBoardInventory.subscribe(c => this.boardInventory = this.data.boardInventory);
	}

	ngOnInit() {
	}

}
