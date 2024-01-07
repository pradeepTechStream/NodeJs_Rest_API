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

    async deleteEmployee(id: string): Promise<any> {
        return await employeeTable.destroy({
            where: { id: id }
        });
    }

    async updateEmployee(data: any): Promise<any> {
        const employeeExist = await employeeTable.findOne({
            where: { id: data.id }
        });
        if (employeeExist) {
            return await employeeTable.update(data, {
                where: {
                    id: data.id
                }
            });
        } else {
            return {
                message: 'Employee not available for the given ID'
            };
        }
    }

    async getEmployeeByEmail(email: string): Promise<any> {
        const employeeDetails = await employeeTable.findOne({
            where: { email_id: email }
        });
        if (employeeDetails) {
            const result = {
                employeeDetails: employeeDetails
            };
            return result;
        } else {
            return {
                message: 'User not exist with this email'
            };
        }
    }

}
