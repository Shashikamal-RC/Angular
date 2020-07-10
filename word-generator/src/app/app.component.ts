import { Component } from '@angular/core';
import arrayWords from '../utils/words'
import arrayCountry from '../utils/countries'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'word-generator';
  words: string = '';
  limit: number = 10;

  handleSlideChange = (newLimit: number): void => {
    this.limit = newLimit;
  }

  generate = (): void => {
    this.words = arrayWords.slice(0, this.limit).join(" ");
  }

  generateCountry = (): void => {
    this.words = arrayCountry.slice(0,this.limit).join(" ");
  }

}
