'use strict'

import { Builder } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';

class Browser {
  constructor() {
    if (Browser.instance instanceof Browser) {
      return Browser.instance;
    }
       
    const chromeOptions = new chrome.Options();    
    chromeOptions.addArguments("test-type");
    chromeOptions.addArguments("start-maximized");
    chromeOptions.addArguments("--js-flags=--expose-gc");
    chromeOptions.addArguments("--enable-precise-memory-info");
    chromeOptions.addArguments("--disable-popup-blocking");
    chromeOptions.addArguments("--disable-default-apps");
    chromeOptions.addArguments("--disable-infobars");    
    this.chromeDriver = new Builder().forBrowser('chrome').setChromeOptions(chromeOptions).build();    
    Object.freeze(this);
    Object.freeze(this.chromeDriver);
    Browser.instance = this;
  }  

  async getDriver() {    
    return await this.chromeDriver;
  }

  async get(url) {
    return await (await this.getDriver()).get(url);
  }

  async stop() {
    return await (await this.getDriver()).quit();
  }

  async pause(milliseconds) {
    return await (await this.getDriver()).sleep(milliseconds);
  }
}

export const browser = new Browser(); 