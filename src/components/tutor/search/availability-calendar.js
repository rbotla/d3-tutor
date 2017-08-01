import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

let scheduleOutline = [
	[false, false, false, false, false, false, false],
	[false, false, false, false, false, false, false],
	[false, false, false, false, false, false, false],
	[false, false, false, false, false, false, false],
];

//const availability = ['em', 'mo', 'sun', 'mon'];

const AvailabilityCalendar = ({availability}) => {
	const em  = availability.includes('em' ) ? true : false;
	const mo  = availability.includes('mo' ) ? true : false;
	const af  = availability.includes('af' ) ? true : false;
	const ev  = availability.includes('ev' ) ? true : false;
	
	const mon = availability.includes('mon') ? true : false;
	const tue = availability.includes('tue') ? true : false;
	const wed = availability.includes('wed') ? true : false;
	const thu = availability.includes('thu') ? true : false;
	const fri = availability.includes('fri') ? true : false;
	const sat = availability.includes('sat') ? true : false;
	const sun = availability.includes('sun') ? true : false;

	const anyTime = em || mo || af || ev ? false : true; // if no preference given, consider all
	const anyDay = mon || tue || wed || thu || fri || sat || sun ? false : true; // if no preference given, consider all

	const week = anyDay ? [true, true, true, true, true, true, true] : [mon, tue, wed, thu, fri, sat, sun];

	(anyTime || em) ? scheduleOutline[0] = week: null;
	(anyTime || mo) ? scheduleOutline[1] = week: null;
	(anyTime || af) ? scheduleOutline[2] = week: null;
	(anyTime || ev) ? scheduleOutline[3] = week: null;

	console.log(scheduleOutline);
	const labels = ['5am - 8am', '8am - 12pm', '12pm - 5pm', '5pm - 10pm']

	return (
		<div>
		<br/><br/>
			<table>
				<thead>
					<th></th>
					<th style={{fontSize: 'small'}}>Mon</th>
					<th style={{fontSize: 'small'}}>Tue</th>
					<th style={{fontSize: 'small'}}>Wed</th>
					<th style={{fontSize: 'small'}}>Thu</th>
					<th style={{fontSize: 'small'}}>Fri</th>
					<th style={{fontSize: 'small'}}>Sat</th>
					<th style={{fontSize: 'small'}}>Sun</th>
				</thead>
				{
					scheduleOutline.map( (x,k) => (
						<tr>
							<td style={{fontSize: 'small'}}>{labels[k]}</td>
							{
								x.map( y => (
									<td style={{backgroundColor: y ? '#4ACF4A' : 'rgb(240, 243, 246)', width: '30px', height: '30px'}}>
										
									</td>
								))
							}
						</tr>
					))
				}
			</table>
		</div>
	)
}

export default AvailabilityCalendar;