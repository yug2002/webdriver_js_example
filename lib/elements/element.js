'use strict'

import { By } from 'selenium-webdriver';
import * as wait from '../../utils/wait';

const waitFor = wait.waitFor;

export default class Element {
  constructor(selector, element = null) {  
    this.parentElement = element;  
    if(element && !selector) {
      this.element = element;
      this.parentElement = element;
    } else if(selector && element) {
      this.parentElement = element;
      this.element = this.findElement(selector);
    }
    this.predicate = async () => await (await this.element).isDisplayed();  
       
  };

  findElement(selector) {
    let pr = new Promise (async resolve => resolve(await this.parentElement)).then(async el => await el.findElement(By.xpath(selector)));
    return pr;
  };

  findElements(selector) {
    let pr = new Promise (async resolve => resolve(await this.parentElement)).then(async el => await el.findElements(By.xpath(selector)));
    return pr;
  };

  async click() {
    await waitFor(this.predicate);
    const element = await this.element;
    return await element.click();
  };

  async type(text) {
    
    await waitFor(this.predicate);
    const element = await this.element;
    return await element.sendKeys(text);
  };

  async isDisplayed() {
    await waitFor(this.predicate, 5000);
    const element = await this.element;
    return await element.isDisplayed();
  };

  async getText() {
    await waitFor(this.predicate);
    const element = await this.element;
    return await element.getText();
  };
}