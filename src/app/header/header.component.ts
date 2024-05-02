import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {
@ViewChild("hamburgerbutton") hamburgerbutton:any
  show:boolean = true
  ngAfterViewInit() {
    console.log(this.hamburgerbutton)
  }
    navbar():boolean {
      console.log(this.show)
    return this.show = !this.show

  }
}
