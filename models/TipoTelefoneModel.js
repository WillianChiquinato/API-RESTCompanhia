module.exports = (sequelize, DataTypes) => {
    const tipoTelefone = sequelize.define("tipotelefone", {
        Id_TipoTelefone: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        Descricao: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        tableName: 'tipotelefone',
        timestamps: true
    });

    tipoTelefone.associate = function(models) {
        tipoTelefone.hasMany(models.telefone, {
            foreignKey: 'FK_TipoTelefone',
            sourceKey: 'Id_TipoTelefone',
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'
        });
    };

    return tipoTelefone;
};