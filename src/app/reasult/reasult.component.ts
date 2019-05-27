import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reasult',
  templateUrl: './reasult.component.html',
  styleUrls: ['./reasult.component.css']
})
export class ReasultComponent implements OnInit {

  result:number;
  constructor(private quizServie:QuizService, private router:Router) { }

  ngOnInit() {
    this.result = this.quizServie.getResult()
    if( this.result === undefined){
      this.router.navigate(['/']);
    }
  }

}
