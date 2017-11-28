import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  static minorVersionParent = 0;
  static majorVersionParent = 1;
  myValue = '';
  constructor() { }

  ngOnInit() {
  }

  updateMajor() {
    ParentComponent.minorVersionParent++;
  }

  updateMinor() {
    ParentComponent.majorVersionParent++;
  }

  getMajor(): number {
    return ParentComponent.majorVersionParent;
  }

  getMinor(): number {
    return ParentComponent.minorVersionParent;
  }

  getMyValue(param: string) {
    this.myValue = param;
  }
}

