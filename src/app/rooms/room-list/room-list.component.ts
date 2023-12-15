import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IRoomList } from '../rooms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hinv-room-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './room-list.component.html',
  styleUrl: './room-list.component.scss'
})
export class RoomListComponent {

  @Input() rooms: IRoomList[] = [];

  @Output() selectedRoom = new EventEmitter<IRoomList>();

  SelectRoom(room: IRoomList){
    this.selectedRoom.emit(room);
  }
}
