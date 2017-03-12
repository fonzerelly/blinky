import { BlinkyPage } from './app.po';

describe('blinky App', () => {
  let page: BlinkyPage;

  beforeEach(() => {
    page = new BlinkyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
