module.exports = (sequelize, DataTypes) => {
    const AdicionaisFuncionario = sequelize.define("adicionaisfuncionario", {
        Id_AdicionaisFuncionario: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        Nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Valor: {
            type: DataTypes.DECIMAL(5, 2),
            allowNull: false
        },
    }, {
        tableName: 'adicionaisfuncionario',
        timestamps: true
    });

    AdicionaisFuncionario.associate = function(models) {
        AdicionaisFuncionario.hasMany(models.funcionario, {
            foreignKey: 'FK_AdicionaisFuncionario',
            sourceKey: 'Id_AdicionaisFuncionario',
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'
        });
    }

    return AdicionaisFuncionario;
};
