// model file defining the structure of the
// database entity

module.exports = (sequelize: any, DataTypes: any): any => {
    const users = sequelize.define('user', {
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
    return users;
}