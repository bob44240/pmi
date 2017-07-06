import { PmiPage } from './app.po';

describe('pmi App', () => {
  let page: PmiPage;

  beforeEach(() => {
    page = new PmiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
