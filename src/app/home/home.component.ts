import { Component, OnInit, AfterViewInit } from '@angular/core';
import 'jarallax';
declare var jarallax: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  $: any;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    jarallax(document.querySelectorAll('.jarallax'), {
      speed: .3
    })
    console.log('hello from jarallax');
  }

}
