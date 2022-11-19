import EmployeeModel from "src/app/models/employee.model";

export class EmployeesState {
    public employees: EmployeeModel[] = [];
}

export enum EmployeeActionType {
    employeesDownloaded = "employeesDownloaded",
    employeeAdded = "employeeAdded",
    employeeUpdated = "employeeUpdated",
    employeeDeleted = "employeeDeleted"
}

export interface EmployeeAction {
    type: EmployeeActionType;
    payload: any;
}

export function employeesDownloadedAction(employees: EmployeeModel[]): EmployeeAction {
    return { type: EmployeeActionType.employeesDownloaded, payload: employees };
}
export function employeeAddedAction(employee: EmployeeModel): EmployeeAction {
    return { type: EmployeeActionType.employeeAdded, payload: employee };
}
export function employeeUpdatedAction(employee: EmployeeModel): EmployeeAction {
    return { type: EmployeeActionType.employeeUpdated, payload: employee };
}
export function employeeDeletedAction(id: number): EmployeeAction {
    return { type: EmployeeActionType.employeeDeleted, payload: id };
}


export function employeesReducer(currentState: EmployeesState = new EmployeesState(), action: EmployeeAction): EmployeesState {

    const newState = { ...currentState };

    switch (action.type) {

        case EmployeeActionType.employeesDownloaded: {
            newState.employees = action.payload;
            break;
        }

        case EmployeeActionType.employeeAdded: {
            newState.employees.push(action.payload);
            break;
        }

        case EmployeeActionType.employeeUpdated: {
            const index = newState.employees.findIndex(e => e.employeeId === action.payload.id);
            newState.employees[index] = action.payload;
            break;
        }

        case EmployeeActionType.employeeDeleted: {
            const index = newState.employees.findIndex(E => E.employeeId === action.payload);
            newState.employees.splice(index, 1);
            break;
        }

    }
    return newState;
}
