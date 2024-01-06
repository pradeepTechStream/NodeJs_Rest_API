import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import { employeeController } from '../../controllers';


export const getAllEmployee = middyfy(async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        const employees = await employeeController.getAllEmployee();
        console.log('All employee details', employees);
        return formatJSONResponse({
            data: { employees },
            statusCode: 200
        });
    } catch (e) {
        return formatJSONResponse({
            statusCode: 500,
            data: { message: e }
        });
    }
});

export const getEmployee = middyfy(async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const id = event.pathParameters.id;
    try {
        const employee = await employeeController.getEmployeeById(id);
        console.log('Employee details by id', employee);
        return formatJSONResponse({
            statusCode: 200,
            data: { employee }
        });
    } catch (e) {
        return formatJSONResponse({
            statusCode: 500,
            data: { message: e }
        });
    }
});
