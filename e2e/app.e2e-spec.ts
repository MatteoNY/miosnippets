import { SnippetsPage } from './app.po';

describe('snippets App', () => {
  let page: SnippetsPage;

  beforeEach(() => {
    page = new SnippetsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
