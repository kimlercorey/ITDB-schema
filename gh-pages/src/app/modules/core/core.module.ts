import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { MainnavComponent } from './mainnav/mainnav.component';
import { RouterModule, Routes } from '@angular/router';

import { MarkdownToHtmlModule } from 'ng2-markdown-to-html';

import { IntroComponent } from '../core/intro/intro.component';
import { ScheduleComponent } from '../list/schedule/schedule.component';
import { IssueComponent } from '../list/issue/issue.component';
import { CodeComponent } from '../list/code/code.component';
import { ValidationComponent } from '../list/validation/validation.component';
import { TicketComponent } from '../jira/ticket/ticket.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },
  {
    path: 'intro',
    component: IntroComponent
  },
  {
    path: 'schedule',
    component: ScheduleComponent
  },
  {
    path: 'issues',
    component: IssueComponent
  },
  {
    path: 'schema',
    component: CodeComponent
  },
  {
    path: 'validations',
    component: ValidationComponent
  },
  {
    path: 'jira-board',
    component: TicketComponent
  },
  {
    path: '**',
    redirectTo: 'intro'
  }
];

@NgModule({
  imports: [
    CommonModule,
    MarkdownToHtmlModule.forRoot(),
    RouterModule.forRoot(routes, { useHash: true })
  ],
  declarations: [MenuComponent, FooterComponent, MainnavComponent, IntroComponent],
  exports: [MenuComponent, FooterComponent, MainnavComponent, IntroComponent]

})
export class CoreModule { }
