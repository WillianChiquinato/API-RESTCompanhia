module.exports = (sequelize, DataTypes) => {
    const funcionario = sequelize.define("funcionario", {
        Id_Funcionario: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        Nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Salario: {
            type: DataTypes.DECIMAL(7, 2),
            allowNull: false
        },
        Imagem: {
            type: DataTypes.STRING,
            allowNull: true
        },
        Total_Salarios: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true
        },
        FK_AdicionaisFuncionario: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'adicionaisfuncionario',
                key: 'Id_AdicionaisFuncionario'
            },
        },
    }, {
        tableName: 'funcionario',
        timestamps: true
    });

    funcionario.associate = function(models) {
        funcionario.hasMany(models.menu, {
            foreignKey: 'FK_Funcionario',
            sourceKey: 'Id_Funcionario',
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'
        });
    };
    
    funcionario.associate = function(models) {
        funcionario.belongsTo(models.endereco, {
            foreignKey: 'FK_Funcionario',
            targetKey: 'Id_Funcionario',
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'
        });
    };

    return funcionario;
};