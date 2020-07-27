'use strict'
import HomePage from '../pages/home_page/home_page';
import LoginPage from '../pages/login_page/login_page';
import TodoPage from '../pages/todo_page/todo_page';

export const getPage = (page, browser) => {
  switch(page.toLowerCase()) {
    case 'home': return new HomePage(browser);
    break;
    case 'login': return new LoginPage(browser);  
    break;
    case 'todo': return new TodoPage(browser);  
    break;
    default: throw new Error('No any page found');
  };
}