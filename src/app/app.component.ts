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


  ngOnInit(): void {
    this.initialiserGrid();
    this.initialiserGridActive()
   
  }

  initialiserGrid(){
    for (let i = 0; i < this.gridRows; i++) {
      const row = [];
      for (let j = 0; j < this.gridColumns; j++) {
        row.push(false);
      }
      this.grid.push(row);
    }

  }
   initialiserGridActive(){
  this.grid[1][2] = true;
  this.grid[2][3] = true;
  this.grid[3][1] = true;
  this.grid[3][2] = true;
  this.grid[3][3] = true;
}
onClickCell(rowIndex: number, colIndex: number) {
  if( this.grid[rowIndex][colIndex]==false)
  this.grid[rowIndex][colIndex]=true;
  else{
    this.grid[rowIndex][colIndex]=false;
  }
}

}
