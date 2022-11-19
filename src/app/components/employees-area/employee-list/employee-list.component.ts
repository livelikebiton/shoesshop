import { NotifyService } from './../../../services/notify.service';
import { EmployeesService } from './../../../services/employees.service';
import { Component, OnInit } from '@angular/core';
import EmployeeModel from 'src/app/models/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

    public employees: EmployeeModel[];

    constructor(private myProductsService: EmployeesService, private notify: NotifyService) { }

    async ngOnInit() {

        try {
            this.employees = await this.myProductsService.getAllEmployees();
        }
        catch (err) {
            this.notify.error(err);
        }
    }
}
