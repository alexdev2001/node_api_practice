// model file defining the structure of the
// database entity

import {Model, ModelStatic} from "sequelize";

module.exports = (sequelize: any, DataTypes: any): ModelStatic<Model> => {
    return sequelize.define('user', {
        userId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    });
}