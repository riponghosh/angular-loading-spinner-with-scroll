import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'angular';

	public numbers=[];
	public loading = false;

	ngOnInit() {
		this.generateArray();
	}


	async generateArray(){
		this.loading=true;
		let len=this.numbers.length;
		for(let i=len;i<=len+50;i++){
			await this.sleep(50).then(() => {
				this.numbers.push(i);
			})
		}
		this.loading=false;
	}

	sleep = (milliseconds) => {
	  	return new Promise(resolve => setTimeout(resolve, milliseconds))
	}
}
