module.exports = (sequelize, DataTypes) => {
    const cidade = sequelize.define("cidade", {
        Id_Cidade: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        Nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        FK_Estado: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'estado',
                key: 'Id_Estado'
            },
        },
    }, {
        tableName: 'cidade',
        timestamps: true
    });

    cidade.associate = function(models) {
        cidade.hasMany(models.bairro, {
            foreignKey: 'FK_Cidade',
            sourceKey: 'Id_Cidade',
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'
        });
    };

    return cidade;
};