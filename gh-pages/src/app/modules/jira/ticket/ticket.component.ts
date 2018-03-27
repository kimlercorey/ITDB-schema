import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../data/api.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  isOpen = {};
  public tickets;

  constructor(private _api: ApiService) { }

  public ngOnInit() {
    // console.log(this._api);
    this._api.loadData('./assets/data/egovjira.json').subscribe((results) => {

      // console.log(results)
      // do stuff with our data here.
      // ....
      // asign data to our class property in the end
      // so it will be available to our template
      console.log('Jira Tickets', results);

      this.tickets = results;
    });

}

}
