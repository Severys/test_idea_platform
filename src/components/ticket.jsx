import React from 'react'
import logo from '../assets/dagestan_logo.png'
import airplane from '../assets/aiplane.svg'


const Ticket = ({ticket}) =>{

	return (
		<div className="ticket">
			<div className="ticket_left">
				<div className="ticket_img">{ticket.carrier}</div>
				<div className="ticket_buy">Купить за {ticket.price} Р</div>
			</div>
			<hr className='ticket_line'></hr>
			<div className="ticket_right">
				<div className="ticket_departe">
					<div className="ticket_time">{ticket.departure_time}</div>
					<div className="ticket_port">{ticket.origin}, {ticket.origin_name}</div>
					<div className="ticket_date">{ticket.departure_date}</div>
				</div>
				<div className="ticket_transfer">
					{ticket.stops == 0 
						? 'Без пересадок' 
						: `${ticket.stops} пересадки`
					} 
				</div>
				<div className="ticket_arrive">
					<div className="ticket_time">{ticket.arrival_time}</div>
					<div className="ticket_port">{ticket.destination}, {ticket.destination_name}</div>
					<div className="ticket_date">{ticket.arrival_date}</div>
				</div>
			</div>			
		</div>
	)
}

export default Ticket;