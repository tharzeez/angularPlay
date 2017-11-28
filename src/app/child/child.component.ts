import {Component, OnInit, Input, OnChanges, SimpleChange, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() minorVersion;
  @Input() majorVersion;
  @Output() childEmitter = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {

  }

  OnChanges(changes: {[propKey: string]: SimpleChange}) {
    console.log(changes);
    for (const prop in changes ) {
      // console.log(prop);
    }
  }

  emitValue() {
    this.childEmitter.emit('hekkishi');
  }
}
