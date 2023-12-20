import { AfterViewInit, Component, ElementRef, OnInit, Optional, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoggerService } from './services/logger.service';

@Component({
    selector: 'hinv-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, RoomsComponent, ContainerComponent, EmployeeComponent]
})
export class AppComponent implements AfterViewInit, OnInit {
  
  hotelName = 'Urban Oasis';

  @ViewChild('roomComponent', { read: ViewContainerRef })  vcr!: ViewContainerRef;

  @ViewChild('hotelAddress', { static: true }) hotelAddress!: ElementRef;

  constructor(@Optional() private loggerService: LoggerService){

  }

  ngAfterViewInit(): void {
    const roomComponentRef = this.vcr.createComponent(RoomsComponent);
    roomComponentRef.instance.numberOfRooms = 1000;
  }
  
  ngOnInit(): void {
    this.hotelAddress.nativeElement.innerText = '123456 ParkWay Street Texas Dallas.';
    this.loggerService?.log('123456 ParkWay Street Texas Dallas.');
  }
}
