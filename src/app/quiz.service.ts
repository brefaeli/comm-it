import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http:HttpClient) { }
  result:number;
  getDBQuiz():Observable<any>{
    return this.http.get<any>("./assets/data/quiz.json");
  }

  getResult(){
    return this.result;
  }
  setResult(value){
    this.result = value;
  }
}
