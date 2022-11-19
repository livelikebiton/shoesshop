import { EmployeesService } from './../../../services/employees.service';
import { NotifyService } from './../../../services/notify.service';
import EmployeeModel from 'src/app/models/employee.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
    private employee = new EmployeeModel;

    public employeeForm: FormGroup;

    public firstNameControl: FormControl;
    public lastNameControl: FormControl;
    public titleControl: FormControl;
    public birthDateControl: FormControl;
    public imageControl: FormControl;

    constructor(
        private myActivatedRoute: ActivatedRoute,
        private myEmployeesService: EmployeesService,
        private notify: NotifyService,
        private myRouter: Router) {
        this.firstNameControl = new FormControl(null, [Validators.required, Validators.pattern("^[A-Z].*$")]);
        this.lastNameControl = new FormControl(null, [Validators.required, Validators.pattern("^[A-Z].*$")]);
        this.titleControl = new FormControl(null, [Validators.required, Validators.pattern("^[A-Z].*$")]);
        this.birthDateControl = new FormControl(null, Validators.required);
        this.imageControl = new FormControl();
        this.employeeForm = new FormGroup({
            firstNameControl: this.firstNameControl,
            lastNameControl: this.lastNameControl,
            titleControl: this.titleControl,
            birthDateControl: this.birthDateControl,
            imageControl: this.imageControl
        });
    }

    async ngOnInit() {
        try {
            this.employee.employeeId = +this.myActivatedRoute.snapshot.params.employeeId;
            const employee = await this.myEmployeesService.getOneEmployee(this.employee.employeeId);
            this.firstNameControl.setValue(employee.firstName);
            this.lastNameControl.setValue(employee.lastName);
            this.titleControl.setValue(employee.title);
            this.birthDateControl.setValue(employee.birthDate);
        }
        catch (err) {
            this.notify.error(err);
        }
    }

    public saveImage(args: Event): void {
        this.employee.image = (args.target as HTMLInputElement).files;
    }

    public async update() {
        try {
            this.employee.firstName = this.firstNameControl.value;
            this.employee.lastName = this.lastNameControl.value;
            this.employee.title = this.titleControl.value;
            this.employee.birthDate = this.birthDateControl.value;
            await this.myEmployeesService.updateEmployee(this.employee);
            this.notify.success("Employee has been update.");
            this.myRouter.navigateByUrl("/employees");
        }
        catch (err) {
            this.notify.error(err);
        }
    }

}
