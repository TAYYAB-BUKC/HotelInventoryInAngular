import { Component } from '@angular/core';
import { RoomService } from '../services/room.service';

@Component({
  selector: 'hinv-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent {
  employeeName = 'Usama Rais';

  constructor(private roomService: RoomService){
    this.roomService.SetOwnerName('Employee Component');
  }

  AlertName(){
    alert(this.roomService.GetOwnerName());
  }
}
