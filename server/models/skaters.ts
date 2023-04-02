const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Skater extends Model { }

    Skater.init({
        name: {
            type: DataTypes.STRING
        },
        img: {
            type: DataTypes.STRING
        },
        category: {
            type: DataTypes.STRING
        },
        partner: {
            type: DataTypes.STRING,
            allowNull: true
        },
        country: {
            type: DataTypes.STRING
        },
        DOB: {
            type: DataTypes.STRING
        },
        height: {
            type: DataTypes.STRING
        },
        status: {
            type: DataTypes.STRING
        },
        personalBest: {
            type: DataTypes.STRING
        },
        achievements: {
            type: DataTypes.ARRAY(DataTypes.STRING)
        }
    }, {
        sequelize,
        modelName: 'skaters'
    })

}