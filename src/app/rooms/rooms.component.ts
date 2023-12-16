import { AfterContentChecked, AfterViewInit, Component, DoCheck, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { IRoom, IRoomList } from './rooms';
import { CommonModule } from '@angular/common';
import { RoomListComponent } from './room-list/room-list.component';
import { HeaderComponent } from '../header/header.component'

@Component({
  selector: 'hinv-rooms',
  standalone: true,
  imports: [CommonModule, RoomListComponent, HeaderComponent],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterContentChecked {
  
  hotelDescription = "Welcome to our urban oasis, where luxury meets convenience in the heart of the city. Nestled in a vibrant neighborhood, our hotel is a beacon of sophistication and modern comfort. Immerse yourself in the elegant ambiance of our meticulously designed rooms, each thoughtfully appointed to cater to your every need. Whether you're here for business or leisure, our dedicated staff is committed to ensuring your stay is nothing short of extraordinary. Indulge in culinary delights at our exquisite restaurant, unwind in our state-of-the-art spa, or simply bask in the breathtaking views from our rooftop lounge. With our unparalleled blend of style and substance, your experience at our hotel will be nothing less than unforgettable. Welcome to a world where every moment is curated to perfection, making your stay more than just accommodation – it's an indulgence in the art of hospitality.";

  numberOfRooms = 10;

  hideRooms = false;

  roomsInformation: IRoom = {
    totalRooms: 10,
    bookedRooms: 9,
    availableRooms: 1
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

  room6: IRoomList = {
    number: 6,
    type: "Super Deluxe",
    price: 250,
    amenities: "Wi-Fi, TV, Mini Bar, Sea View",
    photos: "room6.jpg",
    checkinTime: new Date("2023-12-13T20:00:00"),
    checkoutTime: new Date("2023-12-14T18:00:00"),
    rating: 5
  }

  roomsList: IRoomList[] = [];

  role: string = "SuperAdmin";

  title: string = "Room List";

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent) headerComponentChilds!: QueryList<HeaderComponent>;

  ngOnInit(): void {
    this.roomsList = [
      this.room1, this.room2, this.room3, this.room4, this.room5
    ]
  }

  ToggleRoomsInfo() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Rooms List';
  }

  RoomSelection(room: IRoomList){
    console.log(room);
    this.selectedRoom = room;
  }

  selectedRoom!: IRoomList;

  AddNewRoom() {
    //this.roomsList.push(this.room6);
    this.roomsList = [...this.roomsList, this.room6];
  }

  ngDoCheck(): void {
    console.log('DoCheck event is raised');
  }

  ngAfterViewInit(): void {
    //this.headerComponent.title = 'Rooms Header';
    console.log(this.headerComponentChilds);
    let count= 1;
    this.headerComponentChilds.forEach(v => {
        v.title = 'Rooms Header ' + count;
        count++;
    });
  }

  ngAfterContentChecked(): void {
    // this.headerComponentChilds!.get(0).title = 'First Rooms Header';
    // this.headerComponentChilds!.get(1).title = 'Second Rooms Header';
    // this.headerComponentChilds!.get(2).title = 'Third Rooms Header';
  }
}
