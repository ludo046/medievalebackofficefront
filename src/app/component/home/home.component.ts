import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  public User

  ngOnInit(): void {
      this.User = JSON.parse(sessionStorage.getItem('session'))
      console.log(this.User);
      
  }
}
