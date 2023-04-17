import db from ".";
import { DataTypes, Model } from "sequelize";

export interface EventsAttributes {
    event: string
    date: string
    img: string
    location: string
    topMen: ScoresAttributes[]
    topWomen: ScoresAttributes[]
    topPairs: ScoresAttributes[]
    topDancers: ScoresAttributes[]
    status: string
}

interface ScoresAttributes {
    name: string
    rank: string
    nation: string
    Points: string
    sp: string
    fs: string
}

class Events extends Model<EventsAttributes> implements EventsAttributes {
    public event!: string;
    public date!: string;
    public img!: string;
    public location!: string;
    public topMen!: ScoresAttributes[];
    public topWomen!: ScoresAttributes[];
    public topPairs!: ScoresAttributes[];
    public topDancers!: ScoresAttributes[];
    public status: string;
}

Events.init(
    {
        event: {
            type: DataTypes.STRING
        },
        date: {
            type: DataTypes.STRING
        },
        img: {
            type: DataTypes.STRING
        },
        location: {
            type: DataTypes.STRING
        },
        topMen: {
            type: DataTypes.ARRAY(DataTypes.JSON)
        },
        topWomen: {
            type: DataTypes.ARRAY(DataTypes.JSON)
        },
        topPairs: {
            type: DataTypes.ARRAY(DataTypes.JSON)
        },
        topDancers: {
            type: DataTypes.ARRAY(DataTypes.JSON)
        },
        status: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize: db,
        modelName: 'events'
       
    }
);

export default Events;