import { Component, OnInit } from '@angular/core';
import { DemoColor } from '../chips/chips.component';

@Component({
  selector: 'app-the-will',
  templateUrl: './the-will.component.html',
  styleUrls: ['./the-will.component.css']
})
export class TheWillComponent implements OnInit {
  visible = false;


  availableColors: DemoColor[] = [

    { name: 'Primary', color: 'primary' }

  ];
  constructor() { }

  ngOnInit() {
  }
  add()
  {
    this.visible=true;
  }
}
