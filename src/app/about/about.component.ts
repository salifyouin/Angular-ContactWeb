import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

infos={
  name:'youin',
  email:'salifyouin@gmail.com'
};
  constructor() { }

  ngOnInit() {
  }

}
