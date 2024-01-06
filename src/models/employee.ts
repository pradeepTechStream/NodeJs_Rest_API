import { Sequelize, sequelize } from '../config/db.js';

export interface employee extends Sequelize.Model<employee> {
    id: number;
    email_id: string;
    first_name: string;
    last_name: string;
    gender: string;
    country: string;
    address: string;
    active: boolean;
}

export const employeeTable = sequelize.define<employee>('employee', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    email_id: Sequelize.STRING,
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING,
    gender: Sequelize.STRING,
    country: Sequelize.STRING,
    address: Sequelize.STRING,
    active: Sequelize.BOOLEAN
});
