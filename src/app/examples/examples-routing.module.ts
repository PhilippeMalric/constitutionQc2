import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from '@app/core';

import { ExamplesComponent } from './examples/examples.component';
import { AuthenticatedComponent } from './authenticated/authenticated.component';
import { CrudComponent } from './crud/components/crud.component';

import { GearsComponent } from './gears/gears.component';
import { UsersInfoComponent } from './users-info/users-info.component';
import { PixabayComponent } from './pixabay/pixabay.component';

import {FbComponent} from "./fb-component/fb.component"
import { VariableComponent } from './variable-component/variable.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
const routes: Routes = [
  {
    path: '',
    component: ExamplesComponent,
    children: [
      {
        path: '',
        redirectTo: 'crud',
        pathMatch: 'full'
      },
      {
        path: 'crud',
        component: CrudComponent,
        data: { title: 'Liste de lecture' }
      },
      {
        path: 'pixbay',
        component: PixabayComponent,
        data: { title: 'PixBay' }
      },
      {
        path: 'crud/:id',
        component: CrudComponent,
        data: { title: 'Liste de lecture' }
      },
      {
        path: 'gears',
        component: GearsComponent,
        data: { title: 'Graph' }
      },
      {
        path: 'users-info',
        component: UsersInfoComponent,
        data: { title: 'Users' }
      },
      {
        path: 'fb-comments',
        component: FbComponent,
        data: { title: 'fb' }
      },
      {
        path: 'variables',
        component: VariableComponent,
        data: { title: 'Variables' }
      },
      {
        path: 'questionnaire',
        component: QuestionnaireComponent,
        data: { title: 'Questionnaire' }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamplesRoutingModule {}
