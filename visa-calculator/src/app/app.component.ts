import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'visa-calculator';
  x = 0;
  incrementX() {
      this.x = this.x + 1;
  }
  getX() {
    return this.x;
  }
  //new Map<type, type>([[keyN, valueN]])
  currentAgePoints = 0;
  pointDictionary = new Map<string, number>([['age' , 0], ['education' , 0], ['income' , 0], ['koreanLanguageAbility' , 0]])
  setPoints(categoryName: string, points: number){
    this.pointDictionary.set(categoryName, points);
  }
  
  getPoints() {
    return Array.from(this.pointDictionary.values()).reduce((prev, curr) => curr + prev);
  }

}
