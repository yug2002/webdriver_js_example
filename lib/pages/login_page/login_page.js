import BasePage from '../base_page';
import * as data from '../../../data/constants/constants';

const {common: {inputByType: input}, loginPage: { personalAccount, errorElement }} = data.pagesLocators;

export default class LoginPage extends BasePage {
  constructor(browser) {
    super(browser);
  }

  async inputByType(type) {
    return await this.findElement(input(type));
  }

  async accountElement() {
    return await this.findElement(personalAccount);
  }

  async errorElement(error) {
    return await this.findElement(errorElement(error));
  }
}