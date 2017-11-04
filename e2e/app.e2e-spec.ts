import { BasketEvolutionAngularPage } from './app.po';

describe('basket-evolution-angular App', () => {
  let page: BasketEvolutionAngularPage;

  beforeEach(() => {
    page = new BasketEvolutionAngularPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
