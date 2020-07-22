'use strict'
import HomePage from '../pages/home_page/home_page';
import ResultsPage from '../pages/results_page/results_page';

export const getPage = page => {
  switch(page.toLowerCase()) {
    case 'home': return new HomePage();
    break;
    case 'results': return new ResultsPage();
    // break;
    // case 'todo': return new ToDoPage();
    // break;
    default: throw new Error('No any page found');
  };
}