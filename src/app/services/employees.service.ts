import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import store from '../redux/store';
import { employeeAddedAction, employeeDeletedAction, employeesDownloadedAction, employeeUpdatedAction } from '../redux/employees-state';
import EmployeeModel from '../models/employee.model';

@Injectable({
    providedIn: 'root'
})
export class EmployeesService {

    constructor(private http: HttpClient) { }

    public async getAllEmployees() {
        if (store.getState().employeesState.employees.length === 0) {
            const employees = await this.http.get<EmployeeModel[]>(environment.employeesUrl).toPromise();
            store.dispatch(employeesDownloadedAction(employees));
        }
        return store.getState().employeesState.employees;
    }

    public async getOneEmployee(id: number) {
        if(store.getState().employeesState.employees.length === 0) {
            const employee = await this.http.get<EmployeeModel[]>(environment.employeesUrl).toPromise();
            store.dispatch(employeesDownloadedAction(employee));
        }
        const employee = store.getState().employeesState.employees.find(e => e.employeeId === id);
        return employee;
    }

    public async addEmployee (employee: EmployeeModel) {
        const myFormData: FormData = EmployeeModel.convertToFormData(employee);
        const addedEmployee = await this.http.post<EmployeeModel>(environment.employeesUrl, myFormData).toPromise();
        store.dispatch(employeeAddedAction(addedEmployee));
        return addedEmployee;
    }

    public async updateEmployee (employee: EmployeeModel) {
        const myFormData: FormData = EmployeeModel.convertToFormData(employee);
        const updatedEmployee = await this.http.put<EmployeeModel>(environment.employeesUrl + employee.employeeId, myFormData).toPromise();
        store.dispatch(employeeUpdatedAction(updatedEmployee));
        return updatedEmployee;
    }

    public async deleteProduct (id: number) {
        await this.http.delete(environment.employeesUrl + id).toPromise();
        store.dispatch(employeeDeletedAction(id));
    }
}
