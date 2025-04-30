module.exports = (sequelize, DataTypes) => {
    const despesa = sequelize.define("despesa", {
        Id_Despesa: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        NomeResponsavel: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Data: {
            type: DataTypes.DATE,
            allowNull: false
        },
        Valor: {
            type: DataTypes.DECIMAL(7, 2),
            allowNull: false
        },
        Descricao: {
            type: DataTypes.STRING,
            allowNull: false
        },
        FK_TipoDespesa: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'tipodespesa',
                key: 'Id_TipoDespesa'
            },
        },
    }, {
        tableName: 'despesa',
        timestamps: true
    });

    despesa.associate = function(models) {
        despesa.hasMany(models.menu, {
            foreignKey: 'FK_Despesa',
            sourceKey: 'Id_Despesa',
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'
        });
    };

    return despesa;
};