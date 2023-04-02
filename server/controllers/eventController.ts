import Events, {EventsAttributes} from '../models/events'

// Gets all events
export const getEvents = async () => {
     const events = await Events.findAll()
     console.log(events)
     return events
}

// Gets past or future events based on whats passed in
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
