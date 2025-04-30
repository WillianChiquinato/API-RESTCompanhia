module.exports = (sequelize, DataTypes) => {
    const bairro = sequelize.define("bairro", {
        Id_Bairro: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        Nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        FK_Cidade: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'cidade',
                key: 'Id_Cidade'
            },
        },
    }, {
        tableName: 'bairro',
        timestamps: true
    });

    bairro.associate = function(models) {
        bairro.hasMany(models.cep, {
            foreignKey: 'FK_Bairro',
            sourceKey: 'Id_Bairro',
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'
        });
    };

    return bairro;
};