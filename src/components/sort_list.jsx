import React, { useState } from 'react';

const SortList = ({tranfers, currentTransf}) => {
	const [currency, setCurrence] = useState([
		{
			id: 1,
			cur: 'RUB',
			class: 'rub',
			active: true
		},
		{
			id: 2,
			cur: 'USD',
			class: 'usd',
			active: false
		},
		{
			id: 3,
			cur: 'EUR',
			class: 'eur',
			active: false
		}
	])

	
	return (
		<div className="sort_list">
			<div className="currency">
				Валюта
				<div className="currency_var">
					{currency.map(el => 
						<div 
							className={`currency_var_but ${el.class} ${el.active ? 'active' : '' }`} 
							key={el.id}
						>
							{el.cur}
						</div> )}
				</div>
			</div>
			<div className="transfer">
				Колличество пересадок
				<div className="transfer_check">
					{tranfers.map((el)=>
						<label className="transfer_checkbox" onClick={()=>currentTransf(el.value)}>
						<input type="radio" value={el.value} name='tranferNum' defaultChecked={el.check}/>
						<span>{el.name}</span>
						</label> 
					)}
				</div>
				
			</div>
			
		</div>
	)
}

export default SortList;