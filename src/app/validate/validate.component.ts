import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ValidateComponent implements OnInit {
	isValidated:boolean = true;
	validationMessage:string = "";
	constructor() { }
	
	ngOnInit() {
		if(this.isValidated == true){
			this.validationMessage = "Hooray! Your registered email is now validated.";
		}
		else{
			this.validationMessage = "Oh no! Seems like there are issues with your email validation. " + 
			"Please contact support immediately!";
		}
	}

}
