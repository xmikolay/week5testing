import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Testservice } from './testservice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('week5testing');

  firstName = '';
  lastName = '';
  fullNameResult = '';

  constructor(private testservice: Testservice) {}

  onSubmit(): void {
  this.fullNameResult = this.testservice.fullName(this.firstName, this.lastName);
}
}
