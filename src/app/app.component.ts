import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'angular';

	public numbers=[];

	ngOnInit() {
		this.generateArray();
	}


	generateArray(){
		let len=this.numbers.length;
		for(let i=len;i<=len+50;i++){
			this.numbers.push(i);
		}
	}
}
