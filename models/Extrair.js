module.exports = (sequelize, DataTypes) => {
    const extrair = sequelize.define("extrair", {
        Id_Extrair: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        NomeArquivo : {
            type: DataTypes.STRING,
            allowNull: false
        },
        FK_Inicio: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'inicio',
                key: 'Id_Inicio'
            },
        },
    }, {
        tableName: 'extrair',
        timestamps: true
    });

    // extrair.associate = function(models) {
    //     extrair.hasMany(models.bairro, {
    //         foreignKey: 'FK_Cidade',
    //         sourceKey: 'Id_Cidade',
    //         onDelete: 'RESTRICT',
    //         onUpdate: 'CASCADE'
    //     });
    // };

    return extrair;
};