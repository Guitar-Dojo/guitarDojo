import { Component, OnInit, AfterViewInit } from '@angular/core';
import 'jarallax';
declare let jarallax: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    jarallax(document.querySelectorAll('.jarallax'), {
      speed: .2
    });
  }

}
