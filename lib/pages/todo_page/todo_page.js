'use strict'
import BasePage from '../base_page';
import * as data from '../../../data/constants/constants';
import SideBar from './sideBar_component';
const { sideBar: { parent }} = data.componentLocators;
const {todoPage: { title }} = data.pagesLocators;

export default class TodoPage extends BasePage {
  constructor(browser) {
    super(browser);
    this.sideBar = async () => new SideBar(await this.findComponent(parent));
  } 

  async pageTitle() {
    return await this.findElement(title);
  }
}