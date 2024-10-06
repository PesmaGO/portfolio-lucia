import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar?.classList.toggle('active');  // Alternar la clase 'active'
  }

}
