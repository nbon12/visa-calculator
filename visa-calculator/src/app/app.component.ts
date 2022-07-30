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
  educationPoints = new Map<string, number>([['Doctorate Of Arts', 20], ['Doctorate of Science or Engineering', 25], ['Masters of Science or Engineering', 20], ['Masters of Arts', 17], ['Bachelor of Science or Engineering', 17], ['Bachelor of Arts', 15], ['Associate of Science or Engineering', 15], ['Associate of Arts', 10]])
  koreanLanguagePoints = new Map<string, number>([['Over Level 5', 20], ['Level 4', 15], ['Level 3', 10], ['Level 2', 5], ['Level 1', 3]])

  setPoints(categoryName: string, points: number){
    this.pointDictionary.set(categoryName, points);
  }
  
  getPoints() {
    return Array.from(this.pointDictionary.values()).reduce((prev, curr) => curr + prev);
  }
  
  getEducationLevels() {
    return Array.from(this.educationPoints.keys());
  }
  setEducation(educationLevel: string){
    this.pointDictionary.set('education', this.educationPoints.get(educationLevel)!)
  }

  setKoreanLanguageAbility(koreanLanguageAbility: string){
    this.pointDictionary.set('koreanLanguageAbility', this.koreanLanguagePoints.get(koreanLanguageAbility)!)
  }
  getKoreanLevels() {
    return Array.from(this.koreanLanguagePoints.keys());
  }
}
