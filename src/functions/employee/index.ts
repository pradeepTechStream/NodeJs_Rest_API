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

export const getEmployeeByEmail = {
    handler: `${handlerPath(__dirname)}/handler.getEmployeeByEmail`,
    events: [
        {
            http: {
                method: 'get',
                path: 'employee/email/{email}'
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

export const deleteEmployee = {
    handler: `${handlerPath(__dirname)}/handler.deleteEmployee`,
    events: [
        {
            http: {
                method: 'delete',
                path: 'employee/{id}'
            }
        }
    ]
};

export const updateEmployee = {
    handler: `${handlerPath(__dirname)}/handler.updateEmployee`,
    events: [
        {
            http: {
                method: 'put',
                path: 'employee'
            }
        }
    ]
};