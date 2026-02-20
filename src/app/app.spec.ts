import { TestBed } from '@angular/core/testing';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { App } from './app';
import { Testservice } from './testservice';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, week5testing');
  });

  it('should call the service and display lastname firstname on submit', async () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    const service = TestBed.inject(Testservice);

    app.firstName = 'John';
    app.lastName = 'Doe';
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('button');
    button.click();
    fixture.detectChanges();

    const p = fixture.nativeElement.querySelector('p');
    expect(p?.textContent).toContain('Doe, John');
  });

  it('should call onSubmit which uses the service fullName method', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    const service = TestBed.inject(Testservice);
    const spy = vi.spyOn(service, 'fullName');

    app.firstName = 'John';
    app.lastName = 'Doe';
    app.onSubmit();

    expect(spy).toHaveBeenCalledWith('John', 'Doe');
  });
});