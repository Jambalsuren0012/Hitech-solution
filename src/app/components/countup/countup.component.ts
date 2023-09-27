import { Component } from '@angular/core';

@Component({
  selector: 'app-countup',
  templateUrl: './countup.component.html',
  styleUrls: ['./countup.component.scss'],
})
export class CountupComponent {
  projectcount: number = 0;
  projectcountstop: any = setInterval(() => {
    this.projectcount += 2; // Increment by 100
    if (this.projectcount >= 88) {
      // Adjust the condition if needed
      clearInterval(this.projectcountstop);
    }
  }, 20);

  projectcount2: number = 0;
  projectcountstop2: any = setInterval(() => {
    this.projectcount2 += 50; // Increment by 100
    if (this.projectcount2 >= 10000) {
      clearInterval(this.projectcountstop2);
    }
  }, 30);

  projectcount3: number = 0;
  projectcountstop3: any = setInterval(() => {
    this.projectcount3 += 1; // Increment by 100
    if (this.projectcount3 >= 13) {
      // Adjust the condition if needed
      clearInterval(this.projectcountstop3);
    }
  }, 100);
}
