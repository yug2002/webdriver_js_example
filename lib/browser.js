'use strict'

import { Builder, Capabilities } from 'selenium-webdriver';
export default class Browser {
  constructor() {
    if (Browser.instance instanceof Browser) {
      return Browser.instance;
    }

    let chromeCapabilities = Capabilities.chrome();
    let chromeOptions = { 'args': ['--test-type', '--incognito', '--start-maximized'] }
    chromeCapabilities.set('chromeOptions', chromeOptions); 

    this.chromeDriver = new Builder().withCapabilities(chromeCapabilities).build();
    Object.freeze(this);
    Object.freeze(this.chromeDriver);
    Browser.instance = this;
  }

  async get(url) {
    return await (await this.chromeDriver).get(url);
  }

  async getDriver() {
    return await this.chromeDriver;
  }

  async stop() {
    return await (await this.chromeDriver).quit();
  }
}