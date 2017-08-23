import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rl-navigation-link',
  templateUrl: './navigation-link.component.html',
  styleUrls: ['./navigation-link.component.scss']
})
export class NavigationLinkComponent implements OnInit {

  @Input() routerLink: String;

  constructor() { }

  ngOnInit() {
  }

}
