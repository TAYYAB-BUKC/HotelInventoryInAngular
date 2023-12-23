import { AfterViewInit, Component, ElementRef, Inject, OnInit, Optional, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoggerService } from './services/logger.service';
import { HeaderComponent } from './header/header.component';
import { APP_CONFIGURATION, APP_CONFIGURATION_SERVICE } from './AppConfiguration/appconfiguration.service';
import { LocalStorageToken } from './localstorage.token';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'hinv-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, RoomsComponent, ContainerComponent, EmployeeComponent, HeaderComponent, HttpClientModule],
    providers: [{ provide: APP_CONFIGURATION_SERVICE, useValue: APP_CONFIGURATION}]

})
export class AppComponent implements AfterViewInit, OnInit {
  
  hotelName = 'Urban Oasis';

  @ViewChild('roomComponent', { read: ViewContainerRef })  vcr!: ViewContainerRef;

  @ViewChild('hotelAddress', { static: true }) hotelAddress!: ElementRef;

  constructor(@Optional() private loggerService: LoggerService, @Inject(LocalStorageToken) private localStorage: Storage){

  }

  ngAfterViewInit(): void {
    const roomComponentRef = this.vcr.createComponent(RoomsComponent);
    roomComponentRef.instance.numberOfRooms = 1000;
  }
  
  ngOnInit(): void {
    this.hotelAddress.nativeElement.innerText = '123456 ParkWay Street Texas Dallas.';
    this.loggerService?.log('123456 ParkWay Street Texas Dallas.');
    this.localStorage?.setItem('hotelName', this.hotelName);
  }
}
