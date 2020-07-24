'use strict'

import BasePage from '../base_page';

export default class ResultsPage extends BasePage {
  constructor(browser) {
    super(browser);
  }
  async resultItems() {
    return await this.findElements(`//div[@class='g']//h3`);
  }
}