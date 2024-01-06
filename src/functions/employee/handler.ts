import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import { employeeController } from '../../controllers';


export const getAllEmployee = middyfy(async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        const employees = await employeeController.getAllEmployee();
        console.log('serrrrrr', employees);
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
