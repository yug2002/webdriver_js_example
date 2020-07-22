'use strict'

import { browser }  from '../browser';
import Element from '../elements/element';
import { By } from 'selenium-webdriver';
import * as wait from '../../utils/wait';

const waitFor = wait.waitFor;
const driver = browser.getDriver();

export default class BasePage {
  constructor() {   
  }

  async open(url) {
    return await browser.get(url);
  }

  async findElement(selector) {
    let webdriver = await driver;
    const element = await webdriver.findElement(By.xpath(selector));    
    return new Element(selector, element);
  };

  async findElements(selector) {
    let webdriver = await driver;
    await waitFor(async () => await webdriver.findElements(By.xpath(selector)).length > 0)
    const elements = await webdriver.findElements(By.xpath(selector)); 
    return elements.map (elem => new Element('', elem));   
  };
}