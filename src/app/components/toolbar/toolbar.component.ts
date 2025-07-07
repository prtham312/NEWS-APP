import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  imports: [MatToolbarModule , MatButtonModule , MatIconModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  constructor(private router : Router){}
  goToHome(){
    this.router.navigate(['/home'])
  }
  goToTech(){
    this.router.navigate(['/tech'])
  }
  goToBusiness(){
    this.router.navigate(['/business'])
  }
  goToSports(){
    this.router.navigate(['/sports'])
  }
  goToCars(){
    this.router.navigate(['/cars'])
  }
  
}
