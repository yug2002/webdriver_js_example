'use strict'

import { Builder } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';

const chromeOptions = () =>  {
  const opts = new chrome.Options(); 
  opts.addArguments("test-type");
  opts.addArguments("start-maximized");
  opts.addArguments("--js-flags=--expose-gc");
  opts.addArguments("--enable-precise-memory-info");
  opts.addArguments("--disable-popup-blocking");
  opts.addArguments("--disable-default-apps");
  opts.addArguments("--disable-infobars");  
  return opts;  
};

export default class Browser {
  constructor() {
    if (!!Browser.instance) {
      return Browser.instance;
    }
    Browser.instance = this;
    this._driver = new Builder().forBrowser('chrome').setChromeOptions(chromeOptions()).build();    
    return this;  
  };

  get wrappedDriver() {
    return this._driver;
  };

  async open(url) {
    await this.wrappedDriver.get(url);
  };

  async closeInstance() {
    try {
      if (this.wrappedDriver) {
        await this.wrappedDriver.quit();
      }
    } catch (e) {
      if (e instanceof Error) {
        console.log(e);
      }
    } finally {
      Browser.instance = null;
    };
  };

  async pause(milliseconds) {
    return await this.wrappedDriver.sleep(milliseconds);
  };
}
