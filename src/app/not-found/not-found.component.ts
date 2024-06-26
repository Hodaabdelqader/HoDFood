import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  @Input() visable:boolean=false;
  @Input() notFoundMassage:string='Nothing Found !';
  @Input() resetLinkText:string='Reset';
  @Input() resetLinkRoute:string="/home"

  constructor(){}
  ngOnInit(): void {
  }


}
