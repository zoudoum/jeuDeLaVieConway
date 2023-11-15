import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jeuDeLaVieJohnConway';
  gridColumns = 30;
  gridRows = 20;
  grid: boolean[][] = [];

  constructor() {
    for (let i = 0; i < this.gridRows; i++) {
      const row = [];
      for (let j = 0; j < this.gridColumns; j++) {
        row.push(false);
      }
      this.grid.push(row);
    }
    
  }


}
