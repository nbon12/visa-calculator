import { Component } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'visa-calculator';
  currentAgePoints = 0;
  pointDictionary = new Map<string, number>([
    ['age', 0],
    ['education', 0],
    ['income', 0],
    ['koreanLanguageAbility', 0],
  ]);
  educationPoints = new Map<string, number>([
    ['Doctorate Of Arts', 20],
    ['Doctorate of Science or Engineering', 25],
    ['Masters of Science or Engineering', 20],
    ['Masters of Arts', 17],
    ['Bachelor of Science or Engineering', 17],
    ['Bachelor of Arts', 15],
    ['Associate of Science or Engineering', 15],
    ['Associate of Arts', 10],
    ['None', 0],
  ]);
  koreanLanguagePoints = new Map<string, number>([
    ['Over Level 5', 20],
    ['Level 4', 15],
    ['Level 3', 10],
    ['Level 2', 5],
    ['Level 1', 3],
    ['None', 0],
  ]);
  professionalExperiencePoints = new Map<string, number>([
    ['More than 1 year', 1],
    ['More than 2 years', 3],
    ['More than 3 years', 5],
    ['None', 0],
  ]);
  volunteerActivityPoints = new Map<string, number>([
    ['More than 1 year', 1],
    ['More than 2 years', 3],
    ['More than 3 years', 5],
    ['None', 0],
  ]);
  incomePoints = new Map<number, number>([
    [0, 0],
    [23, 10],
    [30, 30],
    [40, 40],
    [50, 45],
    [60, 50],
    [70, 53],
    [80, 56],
    [90, 58],
    [100, 60],
  ]);

  studyAbroadPoints = new Map<string, number>([
    ['Global Korea Scholarship', 10],
    ['Doctorate Degree', 5],
    ['Masters Degree', 4],
    ['Bachelors Degree', 3],
    ['Korean Language Training', 1],
    ['None', 0],
  ]);
  setPoints(categoryName: string, points: number) {
    this.pointDictionary.set(categoryName, points);
  }
  getPoints() {
    return Array.from(this.pointDictionary.values()).reduce(
      (prev, curr) => curr + prev
    );
  }

  getEducationLevels() {
    return Array.from(this.educationPoints.keys());
  }
  setEducation(educationLevel: string) {
    this.pointDictionary.set(
      'education',
      this.educationPoints.get(educationLevel)!
    );
  }

  setKoreanLanguageAbility(koreanLanguageAbility: string) {
    this.pointDictionary.set(
      'koreanLanguageAbility',
      this.koreanLanguagePoints.get(koreanLanguageAbility)!
    );
  }
  getKoreanLevels() {
    return Array.from(this.koreanLanguagePoints.keys());
  }
  formatLabel(value: number) {
    return value + 'M';
  }

  setIncomeLevel(incomeMillions: number) {
    this.pointDictionary.set('income', this.incomePoints.get(incomeMillions)!);
  }
  onInputChange($event: MatSliderChange) {
    if ($event.value == null) return;
    if ($event.value < 23) this.setIncomeLevel(0);
    if ($event.value >= 23 && $event.value < 30) this.setIncomeLevel(23);
    if ($event.value >= 30 && $event.value < 40) this.setIncomeLevel(30);
    if ($event.value >= 40 && $event.value < 50) this.setIncomeLevel(40);
    if ($event.value >= 50 && $event.value < 60) this.setIncomeLevel(50);
    if ($event.value >= 60 && $event.value < 70) this.setIncomeLevel(60);
    if ($event.value >= 70 && $event.value < 80) this.setIncomeLevel(70);
    if ($event.value >= 80 && $event.value < 90) this.setIncomeLevel(80);
    if ($event.value >= 90 && $event.value < 100) this.setIncomeLevel(90);
    if ($event.value >= 100) this.setIncomeLevel(100);
  }

  getProfessionalExperiences() {
    return Array.from(this.professionalExperiencePoints.keys());
  }
  setProfessionalExperience(professionalExperience: string) {
    this.pointDictionary.set(
      'professionalExperience',
      this.professionalExperiencePoints.get(professionalExperience)!
    );
  }

  getVolunteerActivities() {
    return Array.from(this.volunteerActivityPoints.keys());
  }
  setVolunteerActivities(volunteerActivity: string) {
    this.pointDictionary.set(
      'volunteerActivities',
      this.volunteerActivityPoints.get(volunteerActivity)!
    );
  }

  getPointsClass() {
    if (this.getPoints() < 80) return "totalPointsFail"
    return "totalPointsSuccess"
  }

  getStudyAbroad() {
    return Array.from(this.studyAbroadPoints.keys());
  }
  setStudyAbroad(studyAbroad: string) {
    this.pointDictionary.set(
      'studyAbroad',
      this.studyAbroadPoints.get(studyAbroad)!
    );
  }
}
