module.exports = (sequelize, DataTypes) => {
    const indicador = sequelize.define("indicador", {
        Id_Indicador: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        QuantidadeCarros: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Faturamento: {
            type: DataTypes.DECIMAL(7, 2),
            allowNull: false
        },
        Despesas: {
            type: DataTypes.DECIMAL(7, 2),
            allowNull: false
        },
        Lucro: {
            type: DataTypes.DECIMAL(7, 2),
            allowNull: false
        },
        TicketMedio: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        FK_TipoIndicador: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'tipoindicador',
                key: 'Id_TipoIndicador'
            },
        },
    }, {
        tableName: 'indicador',
        timestamps: true
    });

    indicador.associate = function(models) {
        indicador.hasMany(models.menu, {
            foreignKey: 'FK_Indicador',
            sourceKey: 'Id_Indicador',
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'
        });
    };

    return indicador;
};