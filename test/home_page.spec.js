'use strict'

import * as data from '../data/constants/constants'; 
import * as pages from '../lib/pages/page_factory';
import Browser from '../lib/browser';
import { expect } from "chai";
import * as helpers from '../utils/helpers';

const getString = helpers.generatedString;
const { login, password } = data; 


describe('check home page', () => {
  let browser;
  let home; 
  describe('positive scenarios for home page', () => {     
    afterEach(async () => {
      return await browser.closeInstance();        
    });
    beforeEach(async () => {  
      browser = new Browser();
      home = pages.getPage('home', browser);
      await home.open();
    });
  
    it('check that home page is opened', async () => { 
      const title = await home.title();       
      expect(await title.getText()).to.be.equal('Microsoft To Do');    
    });
  
    it('check that user can login', async () => {
      const button = await home.buttonByName('Get started');
      await button.click();
      const loginPage = pages.getPage('login', browser);
      const emailInput = await loginPage.inputByType('email');
      await emailInput.type(login);
      let submit = await loginPage.inputByType('submit');
      await submit.click();
      const account = await loginPage.accountElement();
      await account.click();
      const passwordInput = await loginPage.inputByType('password');
      await passwordInput.type(password);
      submit = await loginPage.inputByType('submit');
      await submit.click();
      const todoPage = pages.getPage('todo', browser); 
      const title = await todoPage.pageTitle();
      expect(await title.getText()).to.be.equal('To Do');
    })
  });

  const tests = [{log: getString(13)}, { log: getString(10)}, { log: getString(10)}];

  tests.forEach(function(run) {
      describe('negative scenarios for home page with ' + run.log + ' login', () => {    
      afterEach(async () => {
        return await browser.closeInstance();        
      });
      beforeEach(async () => {  
        browser = new Browser();
        home = pages.getPage('home', browser);
        await home.open();
      });

      it('check negative login scenarios', async () => {
        const button = await home.buttonByName('Get started');
        await button.click();
        const loginPage = pages.getPage('login', browser);
        const emailInput = await loginPage.inputByType('email');
        await emailInput.type(run.log);
        let submit = await loginPage.inputByType('submit');
        await submit.click();
        const error = await loginPage.errorElement('username');
        expect(await error.isDisplayed()).to.be.equal(true);
      });
    });      
  }); 
})
