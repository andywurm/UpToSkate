// import dotenv from "dotenv";
import { Dialect } from "sequelize/types";

// dotenv.config();

interface DbConfigType {
	[key: string]: { 
		"username": string,
		"password": string,
		"database": string,
		"host": string,
		"logging": boolean,
		"dialect": Dialect 
	};
}


const dbConfigs: DbConfigType = {
	"development": {
		"username": "uts_user",
		"password": "password",
		"database": "upToSkate",
		"host": "localhost",
		"logging": true,
		"dialect": "postgres"
	},
};

export default dbConfigs;