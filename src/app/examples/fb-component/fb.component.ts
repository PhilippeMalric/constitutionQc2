import { Component, OnInit, ChangeDetectionStrategy, HostListener } from '@angular/core';
import { FbService } from './fb.service';
//import { data } from "../../../../src/assets/fb_video_livraison.ts"



@Component({
  selector: 'anms-fb',
  templateUrl: './fb.component.html',
  styleUrls: ['./fb.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FbComponent implements OnInit {
  imgs$: any;
  payload: any;

  fbData = []


  constructor(private FbService:FbService) { }


  changed(data:any){
    console.log("changed()")
    console.log("data")
    console.log(data)

    this.imgs$ = this.FbService.images(data)
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
