import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

import { FormGroup }                 from '@angular/forms';

import { QuestionControlService }    from '../questionnaire/question-service';
import { Question } from '../questionnaire/question';

@Component({
  selector: 'anms-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
  providers: [ QuestionControlService ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicFormComponent implements OnInit {


  @Input() questions: Question<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService) {  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

}


