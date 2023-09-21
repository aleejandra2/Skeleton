import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segments',
  templateUrl: './segments.page.html',
  styleUrls: ['./segments.page.scss'],
})
export class SegmentsPage implements OnInit {
  segmentModel = "favorites";
  constructor() { }

  ngOnInit() {
  }
  segmentChanged(event: any){
    console.log(this.segmentModel);
    console.log(event);
  }
}
