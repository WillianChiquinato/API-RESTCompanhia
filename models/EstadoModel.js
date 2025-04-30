module.exports = (sequelize, DataTypes) => {
    const estado = sequelize.define("estado", {
        Id_Estado: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        Nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        tableName: 'estado',
        timestamps: true
    });

    estado.associate = function(models) {
        estado.hasMany(models.cidade, {
            foreignKey: 'FK_Estado',
            sourceKey: 'Id_Estado',
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'
        });
    };

    return estado;
};