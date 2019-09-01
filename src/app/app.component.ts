import { Component  } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    isReport:boolean = false;
    title = 'diy-web-confirmation';
    constructor(public location: Location){
        if (this.location.path().indexOf("reports") > 0) {
            this.isReport = true;
        } else {
            this.isReport = false;
        }
    }
}
