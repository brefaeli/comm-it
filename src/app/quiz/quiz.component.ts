import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { Question } from '../question';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private quizService:QuizService, private router:Router) { }
  questions:Question[];
  questionNumber:number;
  successAnswers:number;

  ngOnInit() {
    this.questionNumber = 0;
    this.successAnswers = 0;
    this.quizService.getDBQuiz()
    .subscribe(data =>{ 
      this.questions = data.questions as Question[];
    } );
    
  }

  answerClick(e, question:Question){
    
    if(question.result && (question.result  == question.correct)) this.successAnswers --;
    question.result = e.target.value;
    if(question.result  == question.correct) this.successAnswers++;

  }

  next(){
    if(this.questionNumber == this.questions.length -1) return;
    this.questionNumber ++;
  }

  previous(){
    if(this.questionNumber == 0) return;
    this.questionNumber --;
  }

  onSubmit(){
   let result = this.successAnswers == 0 ? 0 : this.successAnswers * 100 / this.questions.length;
    this.quizService.setResult(result);
    this.router.navigate(['/result']);
  }
}
