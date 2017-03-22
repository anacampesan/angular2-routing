import { FfPage } from './app.po';

describe('ff App', () => {
  let page: FfPage;

  beforeEach(() => {
    page = new FfPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
