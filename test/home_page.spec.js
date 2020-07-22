'use strict'

import * as data from '../data/constants/constants'; 
import * as pages from '../lib/pages/page_factory';
import { browser } from '../lib/browser';
import { expect } from "chai";

describe('check home page', () => { 
  const home =  pages.getPage('home');
  after(async () => await browser.stop());

  it('check that home page is opened', async () => {
    await home.open(); 
    const google = await home.googleImg();   
     
    expect(await google.isDisplayed()).to.be.true;    
  });

  it('check that searching works correctly', async () => {
    const input = await home.searchingInput();
    await input.type(data.toFindOnHonePage);
    const results = await home.resultItems();
    await results[0].click();
    const links = await pages.getPage('results').resultItems();
    const actualArr = await Promise.all (links.map(async link => (await link.getText()).toLowerCase()));
    
    actualArr.map(text => {
      expect(text).to.include(data.toFindOnHonePage);
    });
  })
});