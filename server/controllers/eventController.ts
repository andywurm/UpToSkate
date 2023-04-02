import Events, {EventsAttributes} from '../models/events'

// Getting all events
export const getEvents = async () => {
     const events = await Events.findAll()
     console.log(events)
     return events
}

export const getEventsByStatus = async (status: string) => {
    const events = await Events.findAll(
       {where: {status: status}}
    )
    console.log(events)
    return events
}

// Add events to database
export const createEvents = async (data: EventsAttributes): Promise<Events> => {
	try {
		const message = await Events.create(data);
		return message;
	} catch (error) {
		throw new Error(error);
	}
};
