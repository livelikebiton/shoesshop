import { NotifyService } from './../../../services/notify.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input } from '@angular/core';
import EmployeeModel from 'src/app/models/employee.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent {

    @Input()
    public employee: EmployeeModel;

    public imageUrl = environment.employeesImagesUrl;

    constructor(private myActivatedRoute: ActivatedRoute,
        private http: HttpClient,
        private notify: NotifyService,
        private myRouter: Router) { }

    public async delete() {
        try {
            const answer = confirm("Are you sure?");
            if (!answer) return;
            await this.http.delete(environment.employeesUrl + this.employee.employeeId).toPromise();
            this.notify.success("Employee has been deleted.");
            this.myRouter.navigateByUrl("/employees");
        }
        catch (err) {
            this.notify.error(err);
        }

    }

}
