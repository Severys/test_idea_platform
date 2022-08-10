import React, { useState } from 'react';
import Ticket from './ticket';
import ticketsArr from '../assets/tickets.json'

const TicketsList = function () {
	const [tickets, setTickets] = useState (ticketsArr.tickets)

	return (
		<div className="ticket_list" >
			{tickets.map((ticket,index) => 
				<Ticket 
					ticket={ticket}	
					key={index}

				/>
			)}
		</div>
	)
}

export default TicketsList;