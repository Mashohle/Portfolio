import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  tab : any = 'profile';

  constructor() { }

  ngOnInit(): void {
  }

  // active class for nav bar selected tab
  onClick(check){
    if(check==1){
      this.tab = 'profile';
    }
    else if(check==2){
      this.tab = 'about';
    }
    else if(check==3){
      this.tab = 'work';
    }
    else if(check==4){
      this.tab = 'resume';
    }
    else if(check==5){
      this.tab = 'contact';
    }
    else{
      this.tab = 'profile';
    }    
  
}

}
