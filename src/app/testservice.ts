import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Testservice {
  
  fullName(firstName: string, lastName: string): string {
    return `${lastName} ${firstName}`;
  }

  compute(num: number): number {
    if (num > 0) {
      return num;
    } else {
      return 0;
    }
  }
}
