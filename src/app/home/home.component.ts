import { Component, OnInit, AfterViewInit } from '@angular/core';

import 'jarallax';
import { DojoEvent } from '../models/dojo-event';
import { EventbriteService } from '../services/eventbrite.service';
declare var jarallax: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  $: any;
  dojoEvent: DojoEvent;
  events: DojoEvent[] = [];

  constructor(
    private ebs: EventbriteService
  ) { }

  ngOnInit() {
    this.getEvents();
  }

  ngAfterViewInit() {
    jarallax(document.querySelectorAll('.jarallax'), {
      speed: .3
    });
  }

  getEvents() {
    this.ebs.getEvents().subscribe(e => {
      e.events.forEach(event => {
        this.dojoEvent = {
          title: event.name.text,
          start: event.start.local,
          end: event.end.local,
          description: event.description.text,
          location: event.venue.address.localized_address_display,
          eventUrl: event.url,
          img: event.logo.url,
          locationHREF: 'http://www.google.com/maps/place/' + event.venue.latitude + ',' + event.venue.longitude
        };
      })
      this.events.push(this.dojoEvent);
      console.log(this.events);
    })
  }

}
