import { DragulaPage } from './app.po';

describe('dragula App', () => {
  let page: DragulaPage;

  beforeEach(() => {
    page = new DragulaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
