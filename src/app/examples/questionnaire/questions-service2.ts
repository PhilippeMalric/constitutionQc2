import { Injectable }       from '@angular/core';
import { Question, DropdownQuestion, TextboxQuestion } from './question';


@Injectable()
export class QuestionService {
  questions: Question<any>[]
  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous
  getQuestions() {

    this.questions= [

      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      })
    ];

    return this.questions.sort((a, b) => a.order - b.order);
  }

addQuestion(){
  this.questions.push( new TextboxQuestion({
                            key: 'emailAddress',
                            label: 'Email',
                            type: 'email',
                            order: 2.5
                          }))
  return this.questions.sort((a, b) => a.order - b.order);
}





}
