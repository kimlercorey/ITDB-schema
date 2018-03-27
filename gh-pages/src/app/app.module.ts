import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { MarkdownToHtmlModule } from 'ng2-markdown-to-html';

import { DataModule } from './modules/data/data.module';
import { ListModule } from './modules/list/list.module';
import { CoreModule } from './modules/core/core.module';
import { JiraModule } from './modules/jira/jira.module';

import { AppComponent } from './app.component';

import { IntroComponent } from './modules/core/intro/intro.component';
import { ScheduleComponent } from './modules/list/schedule/schedule.component';
import { IssueComponent } from './modules/list/issue/issue.component';
import { CodeComponent } from './modules/list/code/code.component';
import { ValidationComponent } from './modules/list/validation/validation.component';
import { TicketComponent } from './modules/jira/ticket/ticket.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DataModule,
    ListModule,
    CoreModule,
    JiraModule,
    HttpModule,
    RouterModule,
    MarkdownToHtmlModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
