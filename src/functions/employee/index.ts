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

