import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserVisitService {
  private readonly localStorageKey = 'hasVisited';
  hasVisited = false;

  constructor() {
    const hasVisitedStored = localStorage.getItem(this.localStorageKey);
    this.hasVisited = hasVisitedStored !== null && JSON.parse(hasVisitedStored);
  }

  markAsVisited() {
    this.hasVisited = true;
    localStorage.setItem(this.localStorageKey, JSON.stringify(true));
  }
}