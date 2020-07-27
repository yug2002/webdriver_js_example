'use strict'
import { login, password } from '../data/constants/constants'; 

export const signIn = async (browser, pages) => {
  const home = pages.getPage('home', browser);
  const loginPage = pages.getPage('login', browser);
  const todoPage = pages.getPage('todo', browser); 
  await home.open();
  const button = await home.buttonByName('Get started');
  await button.click();
  const emailInput = await loginPage.inputByType('email');
  await emailInput.type(login);
  let submit = await loginPage.inputByType('submit');
  await submit.click();
  const account = await loginPage.accountElement();
  await account.click();
  const passwordInput = await loginPage.inputByType('password');
  await passwordInput.type(password);
  submit = await loginPage.inputByType('submit');
  await submit.click();
  const title = await todoPage.pageTitle();
};

export const generatedString = (num) => {
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let str = Array.from(possible).map(() => possible[Math.floor(Math.random() * possible.length)]);
  return str.slice(0, num).join('');
};
