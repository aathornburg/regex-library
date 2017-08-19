import { browser, element, by } from 'protractor';

export class RegexLibraryPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('rl-root h1')).getText();
  }
}
