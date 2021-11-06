import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: any = [
    {
      EventId: 1,
      Theme: 'Angular',
      Local: 'Toronto'
    },
    {
      EventId: 2,
      Theme: 'React',
      Local: 'Halifax'
    },
    {
      EventId: 3,
      Theme: 'Vue',
      Local: 'Vancouver'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
