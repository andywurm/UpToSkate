import db from ".";
import { DataTypes, Model } from "sequelize";


export interface SkatersAttributes {
    name: string
    img: string
    category: string
    partner?: string
    country: string
    DOB: string
    height: string,
    status: string
    personalBest: string,
    achievements: string[]
}


class Skaters extends Model<SkatersAttributes> implements SkatersAttributes {
    public name!: string
    public img: string
    public category!: string
    public partner!: string
    public country!: string
    public DOB!: string
    public height!: string
    public status!: string
    public personalBest!: string
    public achievements!: string[]

}

Skaters.init(
    {
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
            type: DataTypes.STRING
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
        achievements:{
            type: DataTypes.ARRAY(DataTypes.STRING)
        }
    },
    {
        sequelize: db,
        modelName: 'skaters'
       
    }
);

export default Skaters;