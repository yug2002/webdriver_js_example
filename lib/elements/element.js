'use strict'

import { By } from 'selenium-webdriver';
import { browser } from '../browser';
import * as wait from '../../utils/wait';

const waitFor = wait.waitFor;

export default class Element {
  constructor(selector, element = null) {
    const driver = async () => await browser.getDriver();
    if(element) {
      this.element = element;
    } else {
      this.element = async () => await driver.findElement(By.xpath(selector));
    }
    this.predicate = async () => await (await this.element).isDisplayed();     
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