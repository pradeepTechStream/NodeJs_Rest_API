import { handlerPath } from '@libs/handler-resolver';


export const getAllEmployee = {
    handler: `${handlerPath(__dirname)}/handler.getAllEmployee`,
    events: [
        {
            http: {
                method: 'get',
                path: 'employee/'
            }
        }
    ]
};

export const getEmployee = {
    handler: `${handlerPath(__dirname)}/handler.getEmployee`,
    events: [
        {
            http: {
                method: 'get',
                path: 'employee/{id}'
            }
        }
    ]
};

export const createEmployee = {
    handler: `${handlerPath(__dirname)}/handler.createEmployeeDetails`,
    events: [
        {
            http: {
                method: 'post',
                path: 'employee'
            }
        }
    ]
};
