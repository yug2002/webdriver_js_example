'use strict'

import * as pages from '../lib/pages/page_factory';
import { browser } from '../lib/browser';
import { expect } from "chai";

describe('ddd', () => {  
  after(async () => await browser.stop());

  it('open page', async () => {
    let homePage = pages.getPage('home');   
    await homePage.open(); 
    const input = await homePage.searchingInput();
    await input.type('testing');
    await browser.pause(15000);    
    expect(true);
  });
});