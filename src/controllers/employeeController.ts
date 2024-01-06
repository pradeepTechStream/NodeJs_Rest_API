import { employeeTable, employee } from '../models/employee';

export default class EmployeeController {
    async getAllEmployee(): Promise<employee[]> {
        return await employeeTable.findAll();
    }

    async getEmployeeById(id: string): Promise<any> {
        return await employeeTable.findOne({
            where: { id: id }
        });
    }

    async createEmployee(employee: employee): Promise<any> {
        return await employeeTable.create(employee);
    }

}
