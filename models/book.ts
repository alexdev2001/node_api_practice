import {Model, ModelStatic} from "sequelize";

module.exports = (sequelize: any, DataTypes: any): ModelStatic<Model> => {
    return sequelize.define('book', {
        bookId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    });
}