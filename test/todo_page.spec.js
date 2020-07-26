import * as data from '../data/constants/constants'; 
import * as pages from '../lib/pages/page_factory';
import Browser from '../lib/browser';
import { expect } from 'chai';
import { signIn as login } from '../utils/helpers';

describe('the work on ToDo page', () => {
  let browser = null;
  
  describe('check that left bar works correctly', () => {
    beforeEach(async () => {
      browser = new Browser();  
      await login(browser, pages);
    });
    afterEach(async () => {
      await browser.closeInstance()
    });

    it('check that left sidebar contains correct menu items', async () => {
      const todo = pages.getPage('todo', browser);
      const sideBar = await todo.sideBar();      
      let items = await sideBar.menuItems();     
      let actualResults = await Promise.all(items.map(async element => await element.getText()));
      let expectedResults = data.leftItems.map(task => task.name);
      expect(actualResults.sort().toString()).to.be.equals(expectedResults.sort().toString());
    });
  });
});
