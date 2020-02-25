import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  navLinks: String[] = ['Dashboard', 'Goals'];
  activeLink: String = this.navLinks[0];

  constructor() { }

  ngOnInit(): void {
  }

  clickTab(link: any) : void {
    this.activeLink = link;
  }

}
