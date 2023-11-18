import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jeuDeLaVieJohnConway';
  gridColumns=30;
  gridRows=15;
  grid: boolean[][]=[];
  jouer:boolean=true;
  private intervalId: any;
  stop:boolean=false

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

clearGrid() {
  this.grid = [];
  for (let row = 0; row < this.gridRows; row++) {
    this.grid[row] = [];
    for (let col = 0; col < this.gridColumns; col++) {
      this.grid[row][col] = false; 
    }
  }
}

private startGame() {
  this.intervalId = setInterval(() => {  
      this.updateGrid();
  }, 500);
}

private stopGame() {
  if (this.intervalId) {
    clearInterval(this.intervalId);
  }
}

private updateGrid() {
  const newGrid: boolean[][] = [];
  for (let i = 0; i < this.grid.length; i++) {
    const newRow = [];
    for (let j = 0; j < this.grid[i].length; j++) {  
      const voisin = this.countVoisinEnVie(i, j); 
      if (this.grid[i][j]) {   
        if (voisin <= 1 || voisin >= 4) {
                newRow.push(false);
        } else {
          
                 newRow.push(true);     
        }
      } else {
      
        if (voisin===3) {
                 
          newRow.push(true);
          
        } else {
          
          newRow.push(false);
        }
      }
    }
    newGrid.push(newRow);
  }
  this.grid = newGrid;
}
private countVoisinEnVie(x: number, y: number): number {
    
  let count = 0;
  
if (this.gridRows - 1 > x && y < this.gridColumns - 1) { 
  if(x + 1 < this.gridRows&&y + 1 < this.gridColumns ){
    if(this.grid[x+1][y+1]){
        count++
    }
 }
}

if(x>0&&y>0){
  if(this.grid[x-1][y-1]){
     count++
  }
}

if (y < this.gridColumns - 1) {
if(y+1<this.gridColumns){
  if(this.grid[x][y+1]){
     count++
  }
}
}



if(x>0){
  if(this.grid[x-1][y]){
     count++
  }
}


if(y>0){
  if(this.grid[x][y-1]){
     count++
  }
}

if (this.gridRows - 1 > x) {
if(y+1<this.gridColumns){
  if(this.grid[x+1][y]){
     count++
  }
}
}

if (this.gridRows - 1 > x) {
 if(y>0&&y+1<this.gridColumns){
   if(this.grid[x+1][y-1]){
      count++
   }
 }
}

if ( y < this.gridColumns - 1) {
 if(y+1<=this.gridColumns&&x>0){
   if(this.grid[x-1][y+1]){
      count++
   }
 }
}

return count;
 
}


onClickStart() {
  this.jouer=false;
  this.stop=true;
  this.startGame();
}

onClickRestart() {
  this.jouer=true
  this.stop=false;
  this.stopGame();
  this.clearGrid();
}

onClickStop(){
  this.jouer=true
  this.stop=false
this.stopGame();
}

}
