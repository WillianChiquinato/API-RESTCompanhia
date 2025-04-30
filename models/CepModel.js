module.exports = (sequelize, DataTypes) => {
    const Cep = sequelize.define("cep", {
        Id_Cep: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        NumeroCEP: {
            type: DataTypes.STRING,
            allowNull: false
        },
        FK_Bairro: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'bairro',
                key: 'Id_Bairro'
            },
        },
    }, {
        tableName: 'cep',
        timestamps: true
    });

    Cep.associate = function(models) {
        Cep.hasMany(models.cep, {
            foreignKey: 'FK_Cidade',
            sourceKey: 'Id_Cidade',
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'
        });
    };

    Cep.associate = function(models) {
        Cep.belongsTo(models.endereco, {
            foreignKey: 'FK_Cep',
            targetKey: 'Id_Cep',
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'
        });
    }

    return Cep;
};