import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/core';

import { Feature, features } from './features.data';
import { HttpService } from '../http.service';
import { VariablesShort } from './variableShort';
import { Observable, BehaviorSubject } from 'rxjs';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'anms-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;


  displayedColumns: string[] = ['name','label','dataset','study','type'];
  resultsLength:any
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  features: Feature[] = features;
  dataSource: MatTableDataSource<VariablesShort>;
  questions :VariablesShort[] = []
  question$ :BehaviorSubject<VariablesShort[]>



  variables = ["Birth",
              "Number",
              "other",
              "Other",
              "MacArthur",
              "diagnosed",
              "serving",
              "medication",
              "feel",
              "guessed",
              "questionnaire",
              "Please",
              "before",
              "Mandarin",
              "weight",
              "ever",
              "pressure",
              "French",
              "completed",
              "Start",
              "family",
              "Prenatal",
              "Total",
              "Hospitalization",
              "SYMBOL",
              "SUBSTITUTION",
              "Frequency",
              "Learning",
              "NUMBER",
              "mother",
              "word_",
              "respondent",
              "Respondent",
              "Trials",
              "since",
              "help",
              "Symbol_",
              "time",
              "child",
              "month",
              "DIFFICULT",
              "Mother",
              "DRIVING",
              "HEALTH",
              "difficulty",
              "Word",
              "HOUSEHOLD",
              "SCORE",
              "PARTNER1",
              "Observed",
              "Living",
              "Partner",
              "EVER",
              "YEAR",
              "TIMES",
              "Fatty",
              "DRIVE",
              "GRADE",
              "YOURSELF",
              "frequency",
              "COHABITATION",
              "currently",
              "oedema",
              "something",
              "death",
              "GRIP",
              "SMOKED",
              "ROMANTIC",
              "Trial__",
              "stopped",
              "distance",
              "DATE",
              "HIGH",
              "CHANGE",
              "THINGS",
              "Cooking",
              "RELATIONSHIP",
              "Cholesterol",
              "FATHER",
              "series_",
              "Area",
              "participant",
              "CATEGORY",
              "Triglycerides",
              "REMEMBERING_",
              "ONCOMING",
              "milk",
              "RELATION",
              "CAR",
              "measured",
              "interview",
              "ACCIDENTS",
              "Health",
              "ERRORS",
              "Phospholipids",
              "Annual",
              "BIOLOGICAL",
              "Prescribed",
              "DRINKING",
              "money"
            ]
  objectVariables: any;
  objectVariablesObject: {};

  checked:boolean = false;

 constructor(private httpService:HttpService,private ref: ChangeDetectorRef){

  this.objectVariablesObject = {}

  this.objectVariables = this.variables.map((v)=>{

  let obj = {name:v,chosen:false}

        this.objectVariablesObject[v] = obj

        return obj

      })


 }

  ngOnInit() {
    this.dataSource = new MatTableDataSource( []);
    this.dataSource.paginator = this.paginator;



  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  click(e:string){
    this.objectVariablesObject[e].chosen =  !this.objectVariablesObject[e].chosen
    this.searchQuestionsByWords()
    }


  change(){
    console.log("change")
    this.checked = !this.checked
    console.log(this.checked)
    this.searchQuestionsByWords()
  }


  searchQuestionsByWords(){
    let finalString = this.objectVariables.filter((data)=> data.chosen).map((data)=>data.name).join()

    if(this.checked){
      this.httpService.findByVariablesAnd(finalString).subscribe((data:any[])=>{
        //this.ref.markForCheck();
        console.log(data)
        this.questions = data.map((d)=>{
           return new VariablesShort(d.Name,d.Label,d.Type,d.Study,d.Dataset,d.words)
          });

          this.dataSource = new MatTableDataSource();
          this.dataSource.data = this.questions
          this.dataSource.paginator = this.paginator;

        })
      }

    else{
      this.httpService.findByVariables(finalString).subscribe((data:any[])=>{
        //this.ref.markForCheck();
        console.log(data)
        this.questions = data.map((d)=>{
           return new VariablesShort(d.Name,d.Label,d.Type,d.Study,d.Dataset,d.words)
          });

          this.dataSource = new MatTableDataSource();
          this.dataSource.data = this.questions
          this.dataSource.paginator = this.paginator;

        })
      }
  }
  openLink(link: string) {
    window.open(link, '_blank');
  }
}
