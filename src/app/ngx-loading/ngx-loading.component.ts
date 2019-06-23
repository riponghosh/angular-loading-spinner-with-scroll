import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-ngx-loading',
	templateUrl: './ngx-loading.component.html',
	styleUrls: ['./ngx-loading.component.css']
})
export class NgxLoadingComponent implements OnInit {

	constructor() { }

	public numbers=[];
	public loading = false;

	ngOnInit() {
		this.generateArray();
	}


	async generateArray(){
		if(this.loading) return;
		this.loading=true;
		let len=this.numbers.length;
		for(let i=len;i<=len+50;i++){
			await this.sleep(500).then(() => {
				this.numbers.push(i);
			})
		}
		this.loading=false;
	}

	sleep = (milliseconds) => {
		return new Promise(resolve => setTimeout(resolve, milliseconds))
	}

}
