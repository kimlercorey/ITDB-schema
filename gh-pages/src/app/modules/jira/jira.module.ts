import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketComponent } from './ticket/ticket.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TicketComponent],
  exports: [TicketComponent]
})
export class JiraModule { }
