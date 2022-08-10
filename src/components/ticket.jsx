import React from 'react'
import logo from '../assets/dagestan_logo.png'


const Ticket = (props) =>{

	return (
		<div className="ticket">
			<div className="ticket_left">
				<div className="ticket_img"><img src={logo} alt="Логотип" /></div>
				<div className="ticket_buy">Купить за {props.ticket.price} Р</div>
			</div>
			<hr className='ticket_line'></hr>
			<div className="ticket_right">
				<div className="ticket_departe">
					<div className="ticket_time">{props.ticket.departure_time}</div>
					<div className="ticket_port">{props.ticket.origin}, {props.ticket.origin_name}</div>
					<div className="ticket_date">{props.ticket.departure_date}</div>
				</div>
				<div className="ticket_transfer">
					{props.ticket.stops} пересадка
				</div>
				<div className="ticket_arrive">
					<div className="ticket_time">{props.ticket.arrival_time}</div>
					<div className="ticket_port">{props.ticket.destination}, {props.ticket.destination_name}</div>
					<div className="ticket_date">{props.ticket.arrival_date}</div>
				</div>
			</div>			
		</div>
	)
}

export default Ticket;