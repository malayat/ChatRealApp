import { ChatRealPage } from './app.po';

describe('chat-real App', () => {
  let page: ChatRealPage;

  beforeEach(() => {
    page = new ChatRealPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
