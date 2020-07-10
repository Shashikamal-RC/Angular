import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Counter App';
  count: number = 0;

  handleReset = ():void => {
    this.count = 0;
  }

  handleIncrease = ():void => {
    this.count < 30 ? this.count = this.count + 1 : this.count;
  }

  handleDecrease = ():void => {
    this.count > 0 ? this.count = this.count - 1 : this.count ;
  }

}
