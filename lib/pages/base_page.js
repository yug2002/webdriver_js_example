'use strict'

//import Browser from '../browser';
import Element from '../elements/element';
import { By } from 'selenium-webdriver';
import * as wait from '../../utils/wait';

const waitFor = wait.waitFor;

export default class BasePage {
  constructor(browser) { 
    this.browser = browser;
    this.driver = this.browser.wrappedDriver;    
  }

  async open(url) {
    return await this.browser.open(url);
  }

  async findElement(selector) {   
    const predicate = async () => (await this.driver.findElements(By.xpath(selector))).length > 0;
    await waitFor(predicate); 
    const element = await this.driver.findElement(By.xpath(selector));    
    return new Element(element);
  };

  async findElements(selector) {    
    await waitFor(async () => (await this.driver.findElements(By.xpath(selector))).length > 0)
    const elements = await this.driver.findElements(By.xpath(selector)); 
    return elements.map (elem => new Element(elem));   
  };

  async findComponent(selector) {
    await waitFor(async () => (await this.driver.findElements(By.xpath(selector))).length > 0)
    const component = await this.driver.findElement(By.xpath(selector)); 
    return new Element(component);
  }
}