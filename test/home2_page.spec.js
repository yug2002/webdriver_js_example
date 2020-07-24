'use strict'

import * as data from '../data/constants/constants'; 
import * as pages from '../lib/pages/page_factory';
import Browser from '../lib/browser';
import { expect } from "chai";

describe('02 check home page', () => { 
  let browser;
  let home; 
  //let home = pages.getPage('home');
  afterEach(async () => {
    await browser.closeInstance();        
  });
  beforeEach(async () => {   
    browser = new Browser();
    home = pages.getPage('home', browser);
    return await home.open()
  });

  it('check that home page is opened', async () => {   
    const google = await home.googleImg();       
    expect(await google.isDisplayed()).to.be.true;    
  });

  it('check that searching works correctly', async () => {
    const input = await home.searchingInput();
    await input.type(data.testWord);
    const results = await home.resultItems();
    await results[0].click();
    const links = await pages.getPage('results', browser).resultItems();
    const currArr = await Promise.all (links.map(async link => (await link.getText()).toLowerCase()));
    const actualArr = currArr.filter(text => text.includes(data.testWord));
    actualArr.map(text => {
      expect(text).to.include(data.testWord);
    });
  })
});