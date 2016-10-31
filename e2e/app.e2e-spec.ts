import { GithubUserListPage } from './app.po';

describe('github-user-list App', function() {
  let page: GithubUserListPage;

  beforeEach(() => {
    page = new GithubUserListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
