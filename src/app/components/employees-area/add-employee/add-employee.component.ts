import { EmployeesService } from './../../../services/employees.service';
import { NotifyService } from './../../../services/notify.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import EmployeeModel from 'src/app/models/employee.model';

@Component({
    selector: 'app-add-employee',
    templateUrl: './add-employee.component.html',
    styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

    public employee = new EmployeeModel();

    public imageVisited: boolean;

    constructor(
        private myEmployeesService: EmployeesService,
        private myRouter: Router,
        private notify: NotifyService) { }

    public saveImage(args: Event): void {
        this.employee.image = (args.target as HTMLInputElement).files;
    }
    
    public imageBlur():void {
        this.imageVisited = true;
    }

    public async send() {
        try {
            await this.myEmployeesService.addEmployee(this.employee);
            this.notify.success("employee has been added");
            this.myRouter.navigateByUrl("/employees");;
        }
        catch (err) {
            this.notify.error(err);
        }
    }

}
