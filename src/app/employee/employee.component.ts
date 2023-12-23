import { Component } from '@angular/core';
import { RoomService } from '../services/room.service';
import { HttpClient } from '@angular/common/http';
import { IEmployeeList } from './employee.inteface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hinv-employee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent {
  employeeName = 'Usama Rais';

  empList: IEmployeeList[] =[];
  constructor(private roomService: RoomService, private httpClient: HttpClient){
    this.roomService.SetOwnerName('Employee Component');
    this.httpClient.get<IEmployeeList[]>('https://json-placeholder.mock.beeceptor.com/users').subscribe(employees => {
      console.log(employees);
      this.empList = employees;
    });
  }

  AlertName(){
    alert(this.roomService.GetOwnerName());
  }
}
