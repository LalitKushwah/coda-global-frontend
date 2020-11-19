import { Menu } from './menu';
import { Address } from './address';


export class RestaurantModel {
    name: string;
    cuisines: Array<string>;
    menu: [Menu];
    address: Address;
    imgUrl: string;
    availability: string;
}
