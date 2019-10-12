import { Component, OnInit, ChangeDetectionStrategy, HostListener } from '@angular/core';
import { PixBayService } from './pixBay.service';




@Component({
  selector: 'anms-pixabay',
  templateUrl: './pixabay.component.html',
  styleUrls: ['./pixabay.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PixabayComponent implements OnInit {
  imgs$: any;
  payload: any;

  constructor(private pixBayService:PixBayService) { }


  changed(data:any){
    console.log("changed()")
    console.log("data")
    console.log(data)

    this.imgs$ = this.pixBayService.images(data)
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
