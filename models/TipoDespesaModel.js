module.exports = (sequelize, DataTypes) => {
    const tipoDespesa = sequelize.define("tipodespesa", {
        Id_TipoDespesa: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        TituloTipo: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        tableName: 'tipodespesa',
        timestamps: true
    });

    tipoDespesa.associate = function(models) {
        tipoDespesa.hasMany(models.despesa, {
            foreignKey: 'FK_TipoDespesa',
            sourceKey: 'Id_TipoDespesa',
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'
        });
    };

    return tipoDespesa;
};