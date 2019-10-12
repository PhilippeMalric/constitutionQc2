import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Input } from '@angular/core';
import { QuestionService } from './questions-service2';
import { QuestionControlService } from './question-service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'anms-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionnaireComponent implements OnInit {

  questions: any[];

  form: FormGroup;
  payLoad = '';

  constructor(private qservice : QuestionService, private qcs: QuestionControlService, private ref: ChangeDetectorRef) {
    this.questions = qservice.getQuestions();
   }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

  addQ(){
    this.questions = this.qservice.addQuestion()
    console.log("questions")
    console.log(this.questions)
    this.form = this.qcs.toFormGroup(this.questions);
    this.ref.markForCheck();
  }

}
