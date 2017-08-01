import React, {Component} from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import { Grid, Row, Col } from 'react-flexbox-grid';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

class TutorFilter extends Component {

	constructor(props) {
		super(props);
	}

	state = {
		subject: null,
		city: null,
		availability: [],
	};

  handleSubjectChange = (event, index, value) => this.setState({subject: value});
  handleCityChange = (event, index, value) => this.setState({city: value});
	handleAvailabilityChange= (event, index, value) => this.setState({availability: value});

  availabilityMenuItems(values) {
  	const times = [
			{label: 'Time Of Day', disabled: true},
			{label: 'Early Morning (5am - 8am)', disabled: false},
			{label: 'Morning (8am - 12pm)', disabled: false},
			{label: 'Afternoon (12pm - 5pm)', disabled: false},
			{label: 'Evening (5pm - 11pm)', disabled: false},
			{label: 'Day', disabled: true},
			{label: 'Monday', disabled: false},
			{label: 'Tuesday', disabled: false},
			{label: 'Wednesday', disabled: false},
			{label: 'Thursday', disabled: false},
			{label: 'Friday', disabled: false},
			{label: 'Saturday', disabled: false},
			{label: 'Sunday', disabled: false}
		];

    return times.map(({label, disabled}) => (
      <MenuItem
        key={label}
        disabled={disabled}
        insetChildren={true}
        checked={values && values.indexOf(label) > -1}
        value={label}
        primaryText={label}
      />
    ));
  }

	render() {
	  const navToolbar = (
	      <Toolbar style={{backgroundColor: '#FFFFFF'}}>
	        <ToolbarGroup>

		        <SelectField
		          floatingLabelText="City"
		          value={this.state.city}
		          onChange={this.handleCityChange}
		        >
		          <MenuItem primaryText="East Godavari District" disabled={true}/>
		          <MenuItem value={1} primaryText="Rajahmundry" />
		          <MenuItem value={2} primaryText="Kakinada" />
		          <MenuItem value={3} primaryText="Amalapuram" />
		          <MenuItem value={4} primaryText="Tuni" />
		          <MenuItem value={5} primaryText="Razole" />
		          <MenuItem value={6} primaryText="Mandapeta" />
		          <MenuItem value={7} primaryText="Peddapuram" />
		          <MenuItem primaryText="West Godavari District" disabled={true}/>
		          <MenuItem value={8} primaryText="Bhimavaram" />
		          <MenuItem value={9} primaryText="Eluru" />
		          <MenuItem value={10} primaryText="Tadepalligudem" />
		          <MenuItem value={11} primaryText="Tanuku" />
		          <MenuItem value={12} primaryText="Palakollu" />
		          <MenuItem value={13} primaryText="Narasapuram" />
		        </SelectField>

		        <SelectField
		          floatingLabelText="Subject"
		          value={this.state.subject}
		          onChange={this.handleSubjectChange}
		        >
		          <MenuItem value={1} primaryText="Mathematics" />
		          <MenuItem value={2} primaryText="Physics" />
		          <MenuItem value={3} primaryText="Chemistry" />
		          <MenuItem value={4} primaryText="English" />
		          <MenuItem value={5} primaryText="Hindi" />
		        </SelectField>


		        <SelectField
		          floatingLabelText="Availability"
			        multiple={true}
		          value={this.state.availability}
		          onChange={this.handleAvailabilityChange}
		        >
			        {this.availabilityMenuItems(this.state.availability)}
		        </SelectField>

	        </ToolbarGroup>
	      </Toolbar>
	    );

    return (
    	<div>
        	{navToolbar}
      </div>
    )
	}
}

export default TutorFilter;