module.exports = (sequelize, DataTypes) => {
    const carro = sequelize.define("carro", {
        Id_Carro: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        NomeVeiculo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Data_Criacao: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        Imagem: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ValorTotal: {
            type: DataTypes.DECIMAL(7, 2),
            allowNull: false
        },
        Descricao: {
            type: DataTypes.STRING,
            allowNull: false
        },
        FK_TipoCarro: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'tipocarro',
                key: 'Id_TipoCarro'
            },
        },
    }, {
        tableName: 'carro',
        timestamps: true
    });

    carro.associate = function(models) {
        carro.hasMany(models.menu, {
            foreignKey: 'FK_Carro',
            sourceKey: 'Id_Carro',
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'
        });
    };

    return carro;
};