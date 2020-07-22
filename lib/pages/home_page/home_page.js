'use strict'

import BasePage from '../base_page';
import * as data from '../../../data/constants/constants';
const url = data.applicationUrl;

export default class HomePage extends BasePage {
  async open() {
    return await super.open(url);
  };

  async searchingInput() {
    return await this.findElement(`//input[@name = 'q']`);
  };
}