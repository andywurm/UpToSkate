import Skaters, {SkatersAttributes} from '../models/skaters'

// Gets all skaters
export const getSkaters = async () => {
     const skaters = await Skaters.findAll()
     console.log(skaters)
     return skaters
}

// Add events to database
export const createSkaters = async (data: SkatersAttributes): Promise<Skaters> => {
	try {
		const message = await Skaters.create(data);
		return message;
	} catch (error) {
		throw new Error(error);
	}
};

