import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  pageTitle:string="Services in angular";
  users:any[]=[
    {id:101 ,name:"xxx"},
    {id:102 ,name:"yyy"},
    {id:103 ,name:"zzz"},
    {id:104 ,name:"uuu"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
