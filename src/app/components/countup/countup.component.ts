import { Component } from '@angular/core';

@Component({
  selector: 'app-countup',
  templateUrl: './countup.component.html',
  styleUrls: ['./countup.component.scss'],
})
export class CountupComponent {
  projectcount: number = 0;
  projectcountstop: any = setInterval(() => {
    this.projectcount++;
    if (this.projectcount === 66) {
      clearInterval(this.projectcountstop);
    }
  }, 20);
  projectcount2: number = 9000;
  projectcountstop2: any = setInterval(() => {
    this.projectcount2++;
    if (this.projectcount2 === 10000) {
      clearInterval(this.projectcountstop2);
    }
  }, 0.1);
  projectcount3: number = 0;
  projectcountstop3: any = setInterval(() => {
    this.projectcount3++;
    if (this.projectcount3 === 13) {
      clearInterval(this.projectcountstop3);
    }
  }, 15);
}
