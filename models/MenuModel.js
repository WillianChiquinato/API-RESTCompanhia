module.exports = (sequelize, DataTypes) => {
    const Menu = sequelize.define("menu", {
        Id_Menu: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        Fk_Carro: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'carro',
                key: 'Id_Carro'
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
        FK_Despesa: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'despesa',
                key: 'Id_Despesa'
            }
        },
        FK_Indicador: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'indicador',
                key: 'Id_Indicador'
            }
        },
    }, {
        tableName: 'menu',
        timestamps: false
    });

    return Menu;
};