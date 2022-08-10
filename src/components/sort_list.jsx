import React, { useState } from 'react';

const SortList = function () {

	return (
		<div className="sort_list">
			<div className="currency">
				Валюта
				<div className="currency_var">
					<div className="currency_var_but rub active">RUB</div>
					<div className="currency_var_but usd">USD</div>
					<div className="currency_var_but eur">EUR</div>
				</div>
			</div>
			<div className="transfer">
				Колличество пересадок
				<div className="transfer_check">
					<label className="custom-checkbox">
					<input type="checkbox" value="value-1"/>
						<span>Все</span>
					</label>
					<label className="custom-checkbox">
					<input type="checkbox" value="value-1"/>
						<span>Без пересадок</span>
					</label>
					<label className="custom-checkbox">
					<input type="checkbox" value="value-1"/>
						<span>1 пересадка</span>
					</label>
					<label className="custom-checkbox">
					<input type="checkbox" value="value-1"/>
						<span>2 пересадки</span>
					</label>
					<label className="custom-checkbox">
					<input type="checkbox" value="value-1"/>
						<span>3 пересадки</span>
					</label>
				</div>
			</div>
		</div>
	)
}

export default SortList;