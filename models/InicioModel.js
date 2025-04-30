module.exports = (sequelize, DataTypes) => {
    const inicio = sequelize.define("inicio", {
        Id_Inicio: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        Mes: {
            type: DataTypes.STRING(10),
            allowNull: false
        },
        Ano: {
            type: DataTypes.STRING(10),
            allowNull: false
        },
    }, {
        tableName: 'inicio',
        timestamps: true
    });

    inicio.associate = function(models) {
        inicio.hasMany(models.extrair, {
            foreignKey: 'FK_Inicio',
            sourceKey: 'Id_Inicio',
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'
        });
    };

    return inicio;
};