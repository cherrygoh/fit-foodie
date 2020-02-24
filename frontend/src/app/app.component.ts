import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  navLinks: String[] = ['Dashboard', 'Goals'];
  activeLink: String = this.navLinks[0];

  ngOnInit() {
  }

  clickTab(link: any) : void {
    this.activeLink = link;
  }
}
