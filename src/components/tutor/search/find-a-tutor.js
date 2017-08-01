import React, {Component} from 'react';
import TutorFilter from './tutor-filter';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as Colors from 'material-ui/styles/colors';
import { Grid, Row, Col } from 'react-flexbox-grid';
import TutorList from './tutor-list';

const muiTheme = getMuiTheme({
  palette: {
    textColor: Colors.darkBlack,
    primary1Color: "#F3294D",
    primary2Color: "#F3294D",
    accent1Color: "#010144",
    pickerHeaderColor: Colors.darkBlack,
    alternateTextColor: Colors.darkBlack
  },
  appBar: {
    height: 60,
  }
});

class FindATeacher extends Component {
	constructor (props) {
		super(props);
	} 

	render () {
		return (
	    <MuiThemeProvider muiTheme={muiTheme}>
				<Grid>
					<Row>
						<Col md={12} style={{ backgroundColor: '#FFFFFF' }}>
							<TutorFilter />
						</Col>
					</Row>
					<Row>
						<Col md={12}>
							<TutorList tutors={tutors}/>
						</Col>
					</Row>
				</Grid>
			</MuiThemeProvider>
		);
	}
}

export default FindATeacher;

const tutors = [
	{name: 'Ashok Akula', city: 'Rajahmundry', availability: ['em', 'mo', 'tue', 'thu'], location: 'Korukonda Road', pic: 'http://4.bp.blogspot.com/-OEsAA8O7zWM/UOlKToc0zEI/AAAAAAAAE2I/46Dnrdj6mRw/s320/Jayam+Ravi+Tamil+Film+Movie+Actor+Latest+Photo+Still+Pic.jpg', rate: '200', rating: 4.6, subjects: ['Mathematics', 'Physics'], membership: 'Featured', lessons: 42, profile: 'I have a B.Tech degree from Aditya Engineering college. I am currently preparing for Banking and civils. I have four years experience teaching Mathematics and Physics for students from 6th class (CBSE/State/NCERT) to intermediate. I provide individual home tutions as well as group tutions.'},
	{name: 'Lakshmi Sunkara', city: 'Rajahmundry', availability: ['mo', 'ev', 'sat', 'sun'], location: 'JN Road', pic: 'https://www.weddinginn.in/Profile_Pic/a0d0f602-059a-46b6-bdb0-8d21e11ac9be.jpg', rate: '250', rating: 4.2, subjects: ['English'], membership: 'Premium', lessons: 89, profile: 'I have a B.Tech degree from Aditya Engineering college. I am currently preparing for Banking and civils. I have four years experience teaching Mathematics and Physics for students from 6th class (CBSE/State/NCERT) to intermediate. I provide individual home tutions as well as group tutions.'},
	{name: 'Mahesh Kanakatala', city: 'Rajahmundry', availability: ['ev'], location: 'Danavaipeta', pic: 'https://musicmanchuria.files.wordpress.com/2010/04/shashikanthadminofmusicmanchuria.jpg', rate: '150', rating: 3.2, subjects: ['Mathematics', 'Physics', 'Chemistry'], membership: 'Featured', lessons: 24, profile: 'I have a B.Tech degree from Aditya Engineering college. I am currently preparing for Banking and civils. I have four years experience teaching Mathematics and Physics for students from 6th class (CBSE/State/NCERT) to intermediate. I provide individual home tutions as well as group tutions.'},
	{name: 'Tony Raj', city: 'Rajahmundry', availability: ['fri', 'sun'], location: 'Danavaipeta', pic: 'https://c1.staticflickr.com/8/7331/14160424605_e3d9eaf7f3_b.jpg', rate: '100', rating: 3.2, subjects: ['Physics', 'Biology'], membership: 'Basic', lessons: 12, profile: 'I have a B.Tech degree from Aditya Engineering college. I am currently preparing for Banking and civils. I have four years experience teaching Mathematics and Physics for students from 6th class (CBSE/State/NCERT) to intermediate. I provide individual home tutions as well as group tutions.'},
]