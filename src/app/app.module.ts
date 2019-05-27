import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import{ HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import {QuizService } from './quiz.service';
import { ReasultComponent } from './reasult/reasult.component';

const routes:Routes = [
  {path:"", redirectTo:"/quiz", pathMatch: 'full'},
  {path:"quiz", component:QuizComponent},
  {path:"result", component:ReasultComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    ReasultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
