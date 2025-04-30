module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("usuario", {
        id_Usuario: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Login: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Senha: {
            type: DataTypes.STRING,
            allowNull: false
        },
        FK_Empresa: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'empresa',
                key: 'Id_Empresa'
            },
            onUpdate: 'CASCADE',
            onDelete: 'RESTRICT'
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            onUpdate: DataTypes.NOW
        }
    }, {
        timestamps: true,
        tableName: 'usuario',
    });

    return User;
}

