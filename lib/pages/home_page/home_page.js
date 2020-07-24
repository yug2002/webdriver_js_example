'use strict'

import BasePage from '../base_page';
import * as data from '../../../data/constants/constants';
const url = data.todoUrl;
const { homePage: { title }, common: { buttonByName : button}} = data.pagesLocators;
 
export default class HomePage extends BasePage {
  constructor(browser) {
    super(browser);
  }
  async open() {
    return await super.open(url);
  };

  async title() {
    return await this.findElement(title);
  }

  async buttonByName(name) {
    return await this.findElement(button(name));
  }

  // async searchingInput() {
  //   return await this.findElement(`//input[@name = 'q']`);
  // };

  // async googleImg() {
  //   return await this.findElement(`//img[@alt='Google']`);
  // }

  // async resultItems() {
  //   return await this.findElements(`//ul[@role]/li`);
  // }
}