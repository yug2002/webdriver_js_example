'use strict'

export const applicationUrl = 'https://www.google.com/';
export const login = 'yug2002@yandex.by';
export const password = '12344321abcd';
export const timeout = 15000;
export const testWord = 'test';
export const todoUrl = 'https://todo.microsoft.com/tasks/';
//pages
export const pagesLocators = {
  loginPage: {
    personalAccount: `//div[@class = 'row tile'][.//*[text() = 'Personal account']]`
  },
  homePage: {
    title: `//h1/span`,
  },
  todoPage: {
    title: '//a/span'
  },
  common: {
    inputByType: type => `//input[@type='${type}']`,
    buttonByName: name => `//a[./*[text()='${name}']]`
  }
}
//components
export const componentLocators = {
  sideBar: {
    parent: `//div[@class='sidebar']`,
    menuItem: `//li[.//div/span]//*[contains(@class, '-title')]`
  },
  mainBar: {
    parent: `//div[@id='main']`,    
    taskLine: `//span[@class='taskItem-title']`,
  },
  rightBar: {
    parent: `//div[@class='details']`,    
  },
  modal: {
    parent: `//div[contains(@class, 'modal main-')]`,
    delete: `//button[@class='button red']`,
    cancel: `//button[@class='button gray']`
  },
  common: {
    buttonByName: (name) => `//button[@aria-label='${name}']`,
    inputByName: (name) => `//input[@aria-label='${name}']`
  }    
}

export const leftItems = {
  myDay: {
    name: 'My Day'
  },
  important: {
    name: 'Important'
  },
  planned: {
    name: 'Planned'   
  },
  assignedToYou: {
    name: 'Assigned to you'
  },
  tasks: {
    name: 'Tasks'
  }
}