import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-ngx-spinner',
  templateUrl: './ngx-spinner.component.html',
  styleUrls: ['./ngx-spinner.component.css']
})
export class NgxSpinnerComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) { }

	public numbers=[];
	public loading = false;

	ngOnInit() {
		// this.generateArray();
	}


	async generateArray(){
		if(this.loading) return;
		this.loading=true;

		this.spinner.show();
		let len=this.numbers.length;
		for(let i=len;i<=len+50;i++){
			await this.sleep(500).then(() => {
				this.numbers.push(i);
			})
		}
		this.loading=false;
		this.spinner.hide();
	}

	sleep = (milliseconds) => {
		return new Promise(resolve => setTimeout(resolve, milliseconds))
	}
}
