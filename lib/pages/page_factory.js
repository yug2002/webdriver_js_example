'use strict'
import HomePage from '../pages/home_page/home_page';
import ResultsPage from '../pages/results_page/results_page';

export const getPage = (page, browser) => {
  switch(page.toLowerCase()) {
    case 'home': return new HomePage(browser);
    break;
    case 'results': return new ResultsPage(browser);    
    default: throw new Error('No any page found');
  };
}