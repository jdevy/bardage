import { Component, OnInit } from '@angular/core';
//import { SwUpdate } from "@angular/service-worker"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  preserveWhitespaces: false,
})
export class AppComponent {}

// implements OnInit {

//   constructor(private swUpdate: SwUpdate) {
//   }

//   ngOnInit() {

//     if (this.swUpdate.isEnabled) {
//       this.swUpdate.available.subscribe(event => {
//         this.swUpdate.activateUpdate().then(() => document.location.reload());
//       })
//     }
//   }

// }

