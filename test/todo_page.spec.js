import * as data from '../data/constants/constants'; 
import * as pages from '../lib/pages/page_factory';
import Browser from '../lib/browser';
import { expect } from 'chai';
import { signIn as login } from '../utils/helpers';

describe('the work on ToDo page', () => {
  this.browser = null;

  describe('check that left bar works correctly', () => {
    beforeEach(async () => {
      this.browser = new Browser();  
      await login(this.browser);
    });

    it('check that left sidebar contains correct menu items', async () => {
      const todo = pages.getPage('todo', this.browser);
      const sideBar = await todo.sideBar();
      let items = await sideBar.menuItems();
      const results = await Promise.all(items.map(async element => await element.getText()));
      
    });
  });
});
