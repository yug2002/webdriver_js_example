import Element from '../../elements/element';
import * as data from '../../../data/constants/constants';

const { sideBar: { menuItem }} = data.componentLocators;

export default class SideBarComponent extends Element {
  constructor(element) {
    super(element);
    this.parent = element;
  }

  async menuItems() {   
    return await this.parent.findElements(menuItem);
  };
} 

