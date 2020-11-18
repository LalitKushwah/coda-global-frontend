import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.scss']
})
export class DishListComponent implements OnInit {

  list = [
    {
      name: 'Paneer Tikka',
      address: 'Vadgaon Sheri, Pune',
      availability: '6AM - 10PM',
      discription: 'This is demo one',
      ingridiants: 'chilly,tommato,corriendor',
      imgUrl: 'https://i.pinimg.com/originals/05/2b/0c/052b0cdd5fbcf6575f31bfd7520d3721.png',
      price: '100 INR'
    },
    {
      name: 'Panner Do Pyaza',
      address: 'Vadgaon Sheri, Pune',
      availability: '6AM - 10PM',
      discription: 'This is demo one',
      ingridiants: 'chilly tommato corriendor',
      imgUrl: 'https://i.pinimg.com/originals/05/2b/0c/052b0cdd5fbcf6575f31bfd7520d3721.png',
      price: '100 INR'
    },
    {
      name: 'Hyat Residency',
      address: 'Vadgaon Sheri, Pune',
      availability: '6AM - 10PM',
      discription: 'This is demo one',
      ingridiants: 'chilly tommato corriendor',
      imgUrl: 'https://i.pinimg.com/originals/05/2b/0c/052b0cdd5fbcf6575f31bfd7520d3721.png',
      price: '100 INR'
    },
    {
      name: 'Dum Aaloo',
      address: 'Vadgaon Sheri, Pune',
      availability: '6AM - 10PM',
      discription: 'This is demo one',
      ingridiants: 'chilly tommato corriendor',
      imgUrl: 'https://i.pinimg.com/originals/05/2b/0c/052b0cdd5fbcf6575f31bfd7520d3721.png',
      price: '100 INR'
    },
    {
      name: 'Mast Pakoda',
      address: 'Vadgaon Sheri, Pune',
      availability: '6AM - 10PM',
      discription: 'This is demo one',
      ingridiants: 'chilly tommato corriendor',
      imgUrl: 'https://i.pinimg.com/originals/05/2b/0c/052b0cdd5fbcf6575f31bfd7520d3721.png',
      price: '100 INR'
    }
  ];

  restaurantName = '';

  constructor( private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(res => {
      this.restaurantName = res.restaurantName;
    });
  }

}
