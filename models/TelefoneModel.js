module.exports = (sequelize, DataTypes) => {
    const Telefone = sequelize.define("telefone", {
        Id_Telefone: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        Telefone01: {
            type: DataTypes.STRING(15),
            allowNull: false
        },
        Telefone02: {
            type: DataTypes.STRING(15),
            allowNull: true
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
            allowNull: false,
            references: {
                model: 'funcionario',
                key: 'Id_Funcionario'
            }
        },
        FK_TipoTelefone: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'tipotelefone',
                key: 'Id_TipoTelefone'
            }
        },
    }, {
        tableName: 'telefone',
        timestamps: true
    });

    return Telefone;
};