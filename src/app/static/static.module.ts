import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';

import { StaticRoutingModule } from './static-routing.module';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { QuestionComponent } from './question/question.component';

import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  imports: [SharedModule, StaticRoutingModule,MatTableModule,MatPaginatorModule],
  declarations: [AboutComponent, FeaturesComponent, QuestionComponent]
})
export class StaticModule {}
