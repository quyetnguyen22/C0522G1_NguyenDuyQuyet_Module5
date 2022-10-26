import {Component, HostListener, OnInit} from '@angular/core';
import {ViewportScroller} from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pageYoffset = 0;

  @HostListener('window:scroll', ['$event']) onScroll(event) {
    this.pageYoffset = window.pageYOffset;
  }

  constructor(private scroll: ViewportScroller) {

  }

  scrollToTop() {
    this.scroll.scrollToPosition([0, 0]);
  }

  ngOnInit(): void {

  }

}
