module.exports = (sequelize, DataTypes) => {
    const TipoEndereco = sequelize.define("tipoendereco", {
        Id_TipoEndereco: {
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
        tableName: 'tipoendereco',
        timestamps: true
    });

    TipoEndereco.associate = function(models) {
        TipoEndereco.hasMany(models.endereco, {
            foreignKey: 'FK_TipoEndereco',
            sourceKey: 'Id_TipoEndereco',
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'
        });
    }

    return TipoEndereco;
};