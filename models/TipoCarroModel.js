module.exports = (sequelize, DataTypes) => {
    const tipoCarro = sequelize.define("tipocarro", {
        Id_TipoCarro: {
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
        tableName: 'tipocarro',
        timestamps: true
    });

    tipoCarro.associate = function(models) {
        tipoCarro.hasMany(models.carro, {
            foreignKey: 'FK_TipoCarro',
            sourceKey: 'Id_Carro',
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'
        });
    };

    return tipoCarro;
};