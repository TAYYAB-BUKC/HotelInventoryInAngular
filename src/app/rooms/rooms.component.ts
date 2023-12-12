import { Component, OnInit } from '@angular/core';
import { IRoom } from './rooms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'hinv-rooms',
  standalone: true,
  imports: [NgIf],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent implements OnInit {

  hotelDescription = "Welcome to our urban oasis, where luxury meets convenience in the heart of the city. Nestled in a vibrant neighborhood, our hotel is a beacon of sophistication and modern comfort. Immerse yourself in the elegant ambiance of our meticulously designed rooms, each thoughtfully appointed to cater to your every need. Whether you're here for business or leisure, our dedicated staff is committed to ensuring your stay is nothing short of extraordinary. Indulge in culinary delights at our exquisite restaurant, unwind in our state-of-the-art spa, or simply bask in the breathtaking views from our rooftop lounge. With our unparalleled blend of style and substance, your experience at our hotel will be nothing less than unforgettable. Welcome to a world where every moment is curated to perfection, making your stay more than just accommodation – it's an indulgence in the art of hospitality.";

  numberOfRooms = 10;

  hideRooms = false;

  roomsInformation: IRoom = {
    totalRooms: 10,
    bookedRooms: 9,
    availableRooms: 1
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  ToggleRoomsInfo() {
    this.hideRooms = !this.hideRooms;
  }
}
