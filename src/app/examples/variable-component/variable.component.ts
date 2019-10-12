import { Component, OnInit, ChangeDetectionStrategy, HostListener } from '@angular/core';
import { VariableService } from './variable.service';
//import { data } from "../../../../src/assets/variables.ts"


@Component({
  selector: 'anms-variable',
  templateUrl: './variable.component.html',
  styleUrls: ['./variable.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VariableComponent implements OnInit {
  imgs$: any;
  payload: any;
  variableData = []


  constructor(private VariableService:VariableService) {

   }


  changed(data:any){
    console.log("changed()")
    console.log("data")
    console.log(data)

  }

  public click(url:string): void {


    let listener = (e: ClipboardEvent) => {
      let clipboard = e.clipboardData || window["clipboardData"];
      clipboard.setData("text", url);
      e.preventDefault();

    };

    document.addEventListener("copy", listener, false)
    document.execCommand("copy");
    document.removeEventListener("copy", listener, false);
  }

  ngOnInit() {
  }

}
