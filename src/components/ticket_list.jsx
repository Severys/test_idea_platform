import React, { useEffect, useState } from 'react';
import Ticket from './ticket';
import ticketsArr from '../assets/tickets.json'

const TicketsList = (curTransf) => {
	const [tickets, setTickets] = useState(ticketsArr.tickets)
	const [currentTickets, setcurrentTickets] = useState(tickets)
	
	React.useEffect(()=>{
		if(curTransf.curTransf === 5){
			setcurrentTickets(tickets)
		}else setcurrentTickets(tickets.filter(el => el.stops === curTransf.curTransf))
	},[curTransf])

	return (
		<div className="ticket_list">
			{currentTickets.sort(function(a, b) {return a.price - b.price;
				}).map((ticket,index) => 
				<Ticket 
					ticket={ticket}	
					key={index}
				/>
			)}
		</div>
	)
}

export default TicketsList;