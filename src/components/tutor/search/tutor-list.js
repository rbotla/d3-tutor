import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import AvailabilityCalendar from './availability-calendar';

const style = {
	title: {
		borderTopStyle: 'groove',
		borderLeftStyle: 'groove',
		borderRightStyle: 'groove',
		backgroundColor: '#b5b5b5',
		padding: '7px',
		marginTop: '10px',
	},
	box: {
		height: '234px',
		padding: '10px',
		margin: '20px',
		borderStyle: 'groove',
		borderWidth: 'thin',		
	},
	name: {
		marginBottom: '0px',
		marginRight: '8px',
		color: '#4f5457',
		lineHeight: '1.1',
		fontSize: '1.5rem'
	},
	profilepic: {
		width: '150px',
		height: '150px',
    overflow: 'hidden',
	},
	featured: {
		width:'110px',
		backgroundColor: '#f0f3f6',
		paddingLeft: '20px',
		paddingRight: '20px',
		paddingTop: '5px',
		paddingBottom: '5px',
		textAlign: 'center',
		fontColor: 'white',
		fontSize: 'medium',
		fontWeight: 'bold'
	},
	rate: {
		width:'110px',
		height: '30px',
		backgroundColor: '#f0f3f6',
		paddingLeft: '20px',
		paddingRight: '20px',
		paddingBottom: '5px',
		textAlign: 'center',
		verticalAlign: 'middle',
		paddingTop: '10px',
		fontSize: '24px',
	},
	smallBox: {
		marginTop: '10px',
		marginBottom: '10px',
		height: '50px',
		textAlign: 'center',
		backgroundColor: '#f0f3f6',
		fontSize: 'large',
		borderTopLeftRadius: '5px',
		borderTopRightRadius: '5px',
	},
	profile: {
		fontFamily: 'Open Sans,sans-serif',
		fontSize: 'medium'
	},
	subject: {
		backgroundColor: '#f0f3f6',
		padding: '8px',
		margin: '5px',
		borderTopLeftRadius: '5px',
		borderTopRightRadius: '5px',
		borderBottomLeftRadius: '5px',
		borderBottomRightRadius: '5px',
	}
}

class TutorList extends Component {
	constructor (props) {
		super(props);
	}

	render () {
		return (
			<div>
			<br/>
			{
			this.props.tutors.map(x => (
				<div style={style.box}>
					<Row>
						<Col sm={2}>
							<Row>
								<Col sm={12}>
									<div style={style.featured}>
										{x.membership}
									</div>
								</Col>
							</Row>
							<Row>
								<Col sm={12}>
									<img style={style.profilepic} src={x.pic}/>
								</Col>
							</Row>
							<Row>
								<Col sm={12}>
									<div style={style.rate}>
										&#8377; {x.rate} < span style={{fontSize: 'medium'}}> per hr </span>
									</div>
								</Col>
							</Row>
						</Col>
						<Col sm={6}>
							<Row>
								<Col md={12}>
									<span style={style.name}>{x.name}</span>
								</Col>
							</Row>
							<Row>
								<Col md={4}>
									<div style={style.smallBox}>
										<span style={{fontSize: 'small'}}> From </span> 
										<br/>
										{x.location}
									</div>
								</Col>

								<Col md={4}>
									<div style={style.smallBox}>
										<span style={{fontSize: 'small'}}> Lessons </span> 
										<br/>
										{x.lessons}
									</div>
								</Col>

								<Col md={4}>
									<div style={style.smallBox}>
										<span style={{fontSize: 'small'}}> Rating </span> 
										<br/>
										{x.rating}
									</div>
								</Col>
							</Row>

							<Row>
								<Col md={12}>
									<div style={style.profile}>
										{x.profile}
									</div>
								</Col>
							</Row>

							<Row>
								<Col md={12}>
									<div>
										<br/>
										{
											x.subjects.map ( y => (
												<span style={style.subject}> {y} </span>
											))
										}
									</div>
								</Col>
							</Row>

						</Col>

						<Col sm={4}>
							<AvailabilityCalendar availability={x.availability}/>
						</Col>
					</Row>
				</div>
				))
			}
			</div>
		)
	}
}

export default TutorList;