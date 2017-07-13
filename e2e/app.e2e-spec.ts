import { AngularLab4Page } from './app.po';

describe('angular-lab4 App', () => {
  let page: AngularLab4Page;

  beforeEach(() => {
    page = new AngularLab4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
