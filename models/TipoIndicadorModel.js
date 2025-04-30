module.exports = (sequelize, DataTypes) => {
    const TipoIndicador = sequelize.define("tipoindicador", {
        Id_TipoIndicador: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        Nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        MetaCircularProgress: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        AtualizacaoAAtual: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
    }, {
        tableName: 'tipoindicador',
        timestamps: true
    });

    TipoIndicador.associate = function(models) {
        TipoIndicador.hasMany(models.indicador, {
            foreignKey: 'FK_TipoIndicador',
            sourceKey: 'Id_TipoIndicador',
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'
        });
    };

    return TipoIndicador;
};