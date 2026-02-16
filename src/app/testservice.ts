import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Testservice {
  
  fullName(firstName: string, lastName: string): string {
    return `${lastName} ${firstName}`;
  }

  //method called compute, if number is greater than 0 returns same number, if number is less than 0 returns 0.
  compute(num: number): number {
    if (num > 0) {
      return num;
    } else {
      return 0;
    }
  }
}
