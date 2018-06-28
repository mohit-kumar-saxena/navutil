import { Component } from '@angular/core';
import { NavigationService } from './navigation.service';
import { Navigation } from './navigation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  nav: Navigation[] = [];
  clickMessage: string;
  app: string;
  role: string;

  constructor(private _navService: NavigationService) { }

  ngOnInit(): void {



  }
  onClickMe() {
    //alert(this.app);
    this._navService.getNavigation(this.app, this.role).subscribe(nav => { this.nav = nav; console.log(this.nav[1]["name"]); });
  }
}
