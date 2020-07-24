import Element from '../../elements/element';
import * as data from '../../../data/constants/constants';

export default class SideBarComponent extends Element {
  constructor(element) {
    super(element);
  }

  async menuItems() {
    return await this.findElements(menuItem);
  };
} 

