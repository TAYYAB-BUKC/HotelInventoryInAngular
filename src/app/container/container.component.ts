import { AfterContentInit, Component, ContentChild, Host } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { RoomService } from '../services/room.service';

@Component({
  selector: 'hinv-container',
  standalone: true,
  imports: [],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss',
  providers: [RoomService]
})
export class ContainerComponent implements AfterContentInit {
  
  @ContentChild(EmployeeComponent) employeeComponent!: EmployeeComponent;

  constructor(@Host() private roomService: RoomService){
    
  }

  ngAfterContentInit(): void {
   console.log(this.employeeComponent); 
   this.employeeComponent.employeeName = 'Tayyab Arsalan';
  }
}
