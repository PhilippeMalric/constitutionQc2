import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';
import { CoreModule } from '@app/core';

import { SettingsModule } from './settings';
import { StaticModule } from './static';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './examples/gears/data.service';
import { CopyCBDirective } from './examples/pixabay/copy-cb.directive';




@NgModule({
  imports: [

    // angular
    BrowserAnimationsModule,
    BrowserModule,

    // core & shared
    CoreModule,
    SharedModule,

    // features
    StaticModule,
    SettingsModule,
    // app
    AppRoutingModule
  ],
  declarations: [AppComponent,CopyCBDirective],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
