module.exports = (sequelize, DataTypes) => {
    const Empresa = sequelize.define("empresa", {
        Id_Empresa: {
            type: DataTypes.CHAR(14),
            primaryKey: true,
            allowNull: false,
            validate: {
                is: /^[0-9]{14}$/ // Validação para garantir que o CNPJ tenha 14 dígitos numéricos
            }
        },
        Nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Endereco: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Telefone: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: /^[0-9]{10,15}$/ // Validação para garantir que o telefone tenha 10 a 15 dígitos
            }
        }
    }, {
        tableName: 'empresa',
        timestamps: false
    });

    Empresa.associate = function(models) {
        Empresa.hasMany(models.usuario, {
            foreignKey: 'FK_Empresa',
            sourceKey: 'Id_Empresa',
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'
        });
    };

    Empresa.associate = function(models) {
        Empresa.hasMany(models.endereco, {
            foreignKey: 'FK_Empresa',
            sourceKey: 'Id_Empresa',
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'
        });
    };

    return Empresa;
};
