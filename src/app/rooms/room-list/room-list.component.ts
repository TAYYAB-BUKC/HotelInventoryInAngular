import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, Self, SimpleChanges } from '@angular/core';
import { IRoomList } from '../rooms';
import { CommonModule } from '@angular/common';
import { RoomService } from '../../services/room.service';

@Component({
  selector: 'hinv-room-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './room-list.component.html',
  styleUrl: './room-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush//,
  //providers: [RoomService]
})
export class RoomListComponent implements OnChanges, OnInit {
  
  @Input() rooms: IRoomList[] = [];

  @Input() title: string = '';

  @Output() selectedRoom = new EventEmitter<IRoomList>();

  constructor(@Self() private roomService: RoomService){
    
  } 
  ngOnInit(): void {
    window.alert('You will see error message on console window stated that no provider found for RoomService because I have added @Self() resolution modifier and removed the providers list from component decorator.');
    console.log('You will see error message on console window stated that no provider found for RoomService because I have added @Self() resolution modifier and removed the providers list from component decorator.');
  }

  
  SelectRoom(room: IRoomList){
    this.selectedRoom.emit(room);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if(changes['title']){
      console.log('Changing Title');
      console.log(changes['title'].currentValue);
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }
}
