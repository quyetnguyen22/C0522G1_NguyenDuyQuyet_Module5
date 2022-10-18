import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  getColor(color: string) {
    switch (color) {
      case 'yellow':
        return document.body.style.backgroundColor = 'yellow';
      case 'blue':
        return document.body.style.backgroundColor = 'blue';
      case 'green':
        return document.body.style.backgroundColor = 'green';
      case 'violet':
        return document.body.style.backgroundColor = 'violet';
      case 'orange':
        return document.body.style.backgroundColor = 'orange';
      case 'red':
        return document.body.style.backgroundColor = 'red';
    }
  }
}
