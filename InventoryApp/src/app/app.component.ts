import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'InventoryApp';
	components = [];


	constructor(private data: DataService){
		this.components = data.components;
		console.log("updated");
		this.data.gotComponents.subscribe( c => this.components = this.data.components);
	}

	// ngOnInit(): void {
	// 	this.http.get('http://localhost:3000/componentInventory/').subscribe
	// 		(data => {
	// 			console.log(data);
	// 		})
	// }
}
