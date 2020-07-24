'use strict'

import * as data from '../data/constants/constants'; 
import * as pages from '../lib/pages/page_factory';
import Browser from '../lib/browser';
import { expect } from "chai";
const { login, password } = data; 

describe('01 check home page', () => { 
  let browser;
  let home; 
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

    //await browser.pause(25000);
    // await input.type(data.testWord);
    // const results = await home.resultItems();
    // await results[0].click();
    // const links = await pages.getPage('results', browser).resultItems();
    // const currArr = await Promise.all (links.map(async link => (await link.getText()).toLowerCase()));
    // const actualArr = currArr.filter(text => text.includes(data.testWord));
    // actualArr.map(text => {
    //   expect(text).to.include(data.testWord);
    // });
  })
});