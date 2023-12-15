import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { IRoomList } from '../rooms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hinv-room-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './room-list.component.html',
  styleUrl: './room-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomListComponent implements OnChanges {
  
  @Input() rooms: IRoomList[] = [];

  @Input() title: string = '';

  @Output() selectedRoom = new EventEmitter<IRoomList>();

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
