import { getTestBed } from '@angular/core/testing';
import { ɵresolveComponentResources } from '@angular/core';
import {
  BrowserTestingModule,
  platformBrowserTesting,
} from '@angular/platform-browser/testing';

getTestBed().initTestEnvironment(
  BrowserTestingModule,
  platformBrowserTesting(),
  { teardown: { destroyAfterEach: true } }
);

await ɵresolveComponentResources((url) =>
  fetch(url).then((res) => res.text())
);