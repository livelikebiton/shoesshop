class EmployeeModel {

    public employeeId: number;
    public firstName: string;
    public lastName: string;
    public title: string;
    public birthDate: Date;
    public imageName: string;
    public image: FileList;

    public static convertToFormData(employee: EmployeeModel): FormData {
        const myFormData = new FormData();
        myFormData.append("firstName", employee.firstName);
        myFormData.append("lastName", employee.lastName);
        myFormData.append("title", employee.title);
        myFormData.append("birthDate", employee.birthDate.toString());
        if (employee.image) myFormData.append("image", employee.image.item(0) as Blob);
        return myFormData;
    }

}

export default EmployeeModel;