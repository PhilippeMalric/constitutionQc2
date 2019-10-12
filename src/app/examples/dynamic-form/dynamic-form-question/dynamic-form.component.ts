

import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { FormGroup }        from '@angular/forms';
import { Question } from '@app/examples/questionnaire/question';


@Component({
  selector: 'anms-dynamic-question-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicFormQuestionComponent  {

  constructor() { }

  @Input() question: Question<any>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }

}




