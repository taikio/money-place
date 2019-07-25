import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  activeRoute: string;
  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.router.url);
    this.activeRoute = this.router.url;
  }

}
