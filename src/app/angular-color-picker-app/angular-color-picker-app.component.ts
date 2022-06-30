import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-angular-color-picker-app',
  templateUrl: './angular-color-picker-app.component.html',
  styleUrls: ['./angular-color-picker-app.component.scss']
})
export class AngularColorPickerAppComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  showGreen() {
    // @ts-ignore
    document.getElementById('color').style.backgroundColor = 'green';
  }
  showRed(){
    // @ts-ignore
    document.getElementById('color').style.backgroundColor = 'red';
  }
}
