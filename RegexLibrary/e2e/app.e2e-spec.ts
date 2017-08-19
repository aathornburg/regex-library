import { RegexLibraryPage } from './app.po';

describe('regex-library App', function() {
  let page: RegexLibraryPage;

  beforeEach(() => {
    page = new RegexLibraryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('rl works!');
  });
});
