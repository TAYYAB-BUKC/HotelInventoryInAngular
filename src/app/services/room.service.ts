import { Injectable } from '@angular/core';
import { IRoomList } from '../rooms/rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  
  ownerName: string = 'Self';

  constructor() {
    
  }
  
  room1: IRoomList = {
    number: 1,
    type: "Standard",
    price: 100,
    amenities: "Wi-Fi, TV",
    photos: "room1.jpg",
    checkinTime: new Date("2023-12-13T12:00:00"),
    checkoutTime: new Date("2023-12-14T10:00:00"),
    rating: 2
  };

  room2: IRoomList = {
    number: 2,
    type: "Deluxe",
    price: 150,
    amenities: "Wi-Fi, TV, Mini Bar",
    photos: "room2.jpg",
    checkinTime: new Date("2023-12-13T14:00:00"),
    checkoutTime: new Date("2023-12-14T12:00:00"),
    rating: 2.5
  }

  room3: IRoomList = {
    number: 3,
    type: "Suite",
    price: 200,
    amenities: "Wi-Fi, TV, Mini Bar, Jacuzzi",
    photos: "room3.jpg",
    checkinTime: new Date("2023-12-13T16:00:00"),
    checkoutTime: new Date("2023-12-14T14:00:00"),
    rating: 3
  }

  room4: IRoomList = {
    number: 4,
    type: "Standard",
    price: 120,
    amenities: "Wi-Fi, TV, Balcony",
    photos: "room4.jpg",
    checkinTime: new Date("2023-12-13T18:00:00"),
    checkoutTime: new Date("2023-12-14T16:00:00"),
    rating: 4
  }

  room5: IRoomList = {
    number: 5,
    type: "Deluxe",
    price: 180,
    amenities: "Wi-Fi, TV, Mini Bar, Sea View",
    photos: "room5.jpg",
    checkinTime: new Date("2023-12-13T20:00:00"),
    checkoutTime: new Date("2023-12-14T18:00:00"),
    rating: 4.5546
  }

  roomsList: IRoomList[] = [
    this.room1, this.room2, this.room3, this.room4, this.room5
  ]

  GetRooms() {
    return this.roomsList;
  }

  GetOwnerName(){
    return this.ownerName;
  }

  SetOwnerName(name:string){
    return this.ownerName = name;
  }
}
