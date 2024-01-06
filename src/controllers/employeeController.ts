import { employeeTable, employee } from '../models/employee';

export default class EmployeeController {
    async getAllEmployee(): Promise<employee[]> {
        return await employeeTable.findAll();
    }

    
}
