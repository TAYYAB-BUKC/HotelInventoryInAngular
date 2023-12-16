import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
    selector: 'hinv-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, RoomsComponent]
})
export class AppComponent implements AfterViewInit, OnInit {
  
  hotelName = 'Urban Oasis';

  @ViewChild('roomComponent', { read: ViewContainerRef })  vcr!: ViewContainerRef;

  @ViewChild('hotelAddress', { static: true }) hotelAddress!: ElementRef;

  ngAfterViewInit(): void {
    const roomComponentRef = this.vcr.createComponent(RoomsComponent);
    roomComponentRef.instance.numberOfRooms = 1000;
  }
  
  ngOnInit(): void {
    this.hotelAddress.nativeElement.innerText = '123456 ParkWay Street Texas Dallas.';
  }

}
