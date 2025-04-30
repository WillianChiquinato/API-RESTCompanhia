module.exports = (sequelize, DataTypes) => {
    const Endereco = sequelize.define("endereco", {
        Id_Endereco: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        Logradouro: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Numero: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Complemento: {
            type: DataTypes.STRING,
            allowNull: true
        },
        FK_Cep: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'cep',
                key: 'Id_Cep'
            }
        },
        FK_TipoEndereco: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'tipoendereco',
                key: 'Id_TipoEndereco'
            }
        },
        FK_Empresa: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'empresa',
                key: 'Id_Empresa'
            }
        },
        FK_Funcionario: {
            type: DataTypes.INTEGER,    
            allowNull: true,
            references: {
                model: 'funcionario',
                key: 'Id_Funcionario'
            }
        },
    }, {
        tableName: 'endereco',
        timestamps: false
    });

    // Endereco.associate = function(models) {
    //     Endereco.hasMany(models.usuario, {
    //         foreignKey: 'FK_Empresa',
    //         sourceKey: 'Id_Empresa',
    //         onDelete: 'RESTRICT',
    //         onUpdate: 'CASCADE'
    //     });
    // };

    return Endereco;
};