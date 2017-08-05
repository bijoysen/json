import { JsonDPage } from './app.po';

describe('json-d App', () => {
  let page: JsonDPage;

  beforeEach(() => {
    page = new JsonDPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
