import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { VariablesShort } from '../features/variableShort';

@Component({
  selector: 'anms-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {


  @Input() question:VariablesShort

  constructor() { }

  ngOnInit() {
  }

}
