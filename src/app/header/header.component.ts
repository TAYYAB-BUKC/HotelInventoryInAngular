import { Component, OnDestroy } from '@angular/core';
import { RoomService } from '../services/room.service';

@Component({
  selector: 'hinv-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  providers: [RoomService]
})
export class HeaderComponent implements OnDestroy {
  title: string = 'Header Title'

  constructor(private roomService: RoomService){
    this.roomService.SetOwnerName('Header Component');
  }

  ngOnDestroy(): void {
    console.log('This Life cyle called when this component element gets removed from the DOM. To illustrate this, I removed this component element from the DOM');
  }

  getRoomServiceOwner(){
    alert(this.roomService.GetOwnerName());
  }
}
