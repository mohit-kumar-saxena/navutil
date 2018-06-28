import { Component, OnInit } from '@angular/core';
import { Navigation } from '../navigation';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  title = 'app';
  nav:Navigation[]=[];
  clickMessage: string;
  app: string;
  role: string;
 
  constructor(private _navService:NavigationService){}

 ngOnInit():void{



 }
 onClickMe() {
  alert(this.app);
  this._navService.getNavigation(this.app,this.role).subscribe(nav=> {this.nav=nav;console.log(this.nav[1]["name"]);});
}

}
