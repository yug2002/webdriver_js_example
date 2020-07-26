'use strict'

import { By } from 'selenium-webdriver';
import * as wait from '../../utils/wait';

const waitFor = wait.waitFor;

export default class Element {
  constructor(element) {  
    this.parentElement = element;
    this.predicate = async () => await (await this.parentElement).isDisplayed();  
  };

  findElement(selector) {
    return new Promise (async resolve => resolve(await this.parentElement)).then(async el => await el.findElement(By.xpath(selector)));
  };

  findElements(selector) {    
    return new Promise (async resolve => resolve(await this.parentElement)).then(async el => await el.findElements(By.xpath(selector)));
  };

  async click() {
    await waitFor(this.predicate);
    const element = await this.parentElement;
    return await element.click();
  };

  async type(text) {
    await waitFor(this.predicate);
    const element = await this.parentElement;
    return await element.sendKeys(text);
  };

  async isDisplayed() {
    await waitFor(this.predicate, 5000);
    const element = await this.parentElement;
    return await element.isDisplayed();
  };

  async getText() {
    await waitFor(this.predicate);
    const element = await this.parentElement;
    return await element.getText();
  };
}