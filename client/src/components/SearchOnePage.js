import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import FaceIcon from '@material-ui/icons/Face';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';

import TextField  from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import API from '../library/API';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Picture from "../Assets/Images/beach.jpeg"


class SearchOnePage extends Component {
  state = {
    searchText: '',
    money: '',
    searchResults: []
}

updateSearch = () => {
  console.log("state for search");
  console.log(this.state);
  const body = Object.keys(this.state)
    .filter(key => this.state[key] != "" && this.state[key] != "No Preference" && key != "searchResults")
    .reduce((obj, key) => {
      obj[key] = this.state[key];
      return obj;
    }, {});
  console.log(body) 
  API.search(body, (searchResults) => {this.setState ({searchResults:searchResults})}, () => alert("Failure!"))
};

onChangeGender = (e, index, value) => {
  this.setState({gender: value}, () => {this.updateSearch()});
  };

onChangeLookingFor = (e, index, value) => {
  this.setState({lookingFor: value}, () => {this.updateSearch()});
  };

onChangeRelationshipStatus = (e, index, value) => {
    this.setState({relationshipStatus: value}, () => {this.updateSearch()});
};

    
onChangeRelationshipLooking = (e, index, value) => {
    this.setState({relationshipLooking: value}, () => {this.updateSearch()});
};

onChangeChildren = (e, index, value) => {
  this.setState({haveChildren: value}, () => {this.updateSearch()});
  };

onChangeEmploymentStatus = (e, index, value) => {
  this.setState({employmentStatus: value}, () => {this.updateSearch()});
};

onChangeEducation = (e, index, value) => {
    this.setState({educationLevel: value}, () => {this.updateSearch()});
};

onChangeEthnic = (e, index, value) => {
  this.setState({ethnic: value}, () => {this.updateSearch()});
  };



getProfile = (email) => {
  API.getProfile(email, (profile) => this.props.toggleFun ("profile", profile.email, profile),
() => alert ("Failure"))
}
  

  //// Search Results

  render() {
    return (

      <React.Fragment>
        <Paper>
          <Grid container>
            <Grid item md={4}>
            <div>
              <Grid container  spacing={16}>
                <Grid item sm={4}>
                  <TextField
                    name = "searchText"
                    value = {this.state.searchText}
                    onChange = {this.onTextChange}
                    floatingLabelText = "FILLIN SPACE-RELLENO"
                    fullWidth = {true}>
                  </TextField>
                      
                         {/* ////LEFT PANEL */}
                  <Toolbar >
                    <IconButton  >
                      <SearchIcon color="error" fontSize="large"/>
                        <Typography variant="h4" color="error" paragraph>
                          Search
                        </Typography>
                    </IconButton>
                  </Toolbar>
              </Grid>

              <Grid item sm={8}>
                <TextField
                  name = "searchText"
                  value = {this.state.searchText}
                  onChange = {this.onTextChange}
                  floatingLabelText = "Search for Profiles-- RELLENO"
                  fullWidth = {true}>
                </TextField>
                <br/>
                <SelectField 
                  name = "gender"
                  floatingLabelText= "Gender"
                  value={this.state.gender}
                  onChange={this.onChangeGender}
                  fullWidth = {true}
                  >       
                    <MenuItem value={"Female"} primaryText = "Female" />
                    <MenuItem value={"Male"} primaryText = "Male" />
                    <MenuItem value={"Other"} primaryText = "Other" />
                    <MenuItem value={"No Preference"} primaryText = "No Preference" />
                </SelectField>
                <br/>
                <SelectField 
                  name = "lookingFor"
                  floatingLabelText= "Looking For"
                  value={this.state.lookingFor}
                  onChange={this.onChangeLookingFor}
                  fullWidth = {true}
                  >       
                    <MenuItem value={"Female"} primaryText = "Female" />
                    <MenuItem value={"Male"} primaryText = "Male" />
                    <MenuItem value={"Both Men or Woman"} primaryText = "No preference" />
                </SelectField>
                <br/>
                  <SelectField 
                    name = "ethnic"
                    floatingLabelText= "Ethnic"
                    value={this.state.ethnic}
                    onChange={this.onChangeEthnic}
                    fullWidth = {true}
                    >       
                    <MenuItem value={"White"} primaryText = "Caucasian" />
                    <MenuItem value={"Hispanic or Latino"} primaryText = "Latino / Latina" />
                    <MenuItem value={"Black or African American" } primaryText = " Black or African American" />
                    <MenuItem value={"Native American or American Indian"} primaryText = " Native American or American Indian" />
                    <MenuItem value={"Native Asian / Pacific Islander"} primaryText = " Native Asian / Pacific Islander" />
                    <MenuItem value={"Other" } primaryText = "Other" />
                    <MenuItem value={"No Preference" } primaryText = "No Preference" />
                </SelectField>
                <br/>
                <SelectField 
                  name = "relationshipStatus"
                  floatingLabelText= "RelationShip Status"
                  value={this.state.relationshipStatus}
                  onChange={this.onChangeRelationshipStatus}
                  fullWidth = {true}
                  >       
                    <MenuItem value={"Single (Never married)"} primaryText = "Single" />
                    <MenuItem value={"Divorced"} primaryText = "Divorced" />
                    <MenuItem value={"Separated"} primaryText = "Separated" />
                    <MenuItem value={"It's Complicated"} primaryText = "No preference" />
                  </SelectField>
                  <br/>
                <SelectField 
                  name = "relationshipLooking"
                  floatingLabelText= " Type of relationship Looking for"
                  value={this.state.relationshipLooking}
                  onChange={this.onChangeRelationshipLooking }
                  fullWidth = {true}
                  >       
                    <MenuItem value={"Casual Dating"} primaryText = "Casual Dating" />
                    <MenuItem value={"Long-Term Relationship"} primaryText = "Long-Term Relationship" />
                    <MenuItem value={"Marriage"} primaryText = "Marriage" />
                    <MenuItem value={"No Preference"} primaryText = "No preference" />
                  </SelectField>

                <br/>
                <SelectField 
                  name = "haveChildren"
                  floatingLabelText= "Have Children"
                  value={this.state.haveChildren}
                  onChange={this.onChangeChildren}
                  fullWidth = {true}
                  >       
                    <MenuItem value={"No"} primaryText = "No" />
                    <MenuItem value={"Yes (Living at home full time)"} primaryText = "Yes (Living at home full time)" />
                    <MenuItem value={"Yes (Living at home part time)"} primaryText = "Yes (Living at home part time)" />
                    <MenuItem value={"Yes (Not Living at home)"} primaryText = "Yes (Not Living at home)" />
                    <MenuItem value={"No Preference"} primaryText = "No Preference" />
                  </SelectField>

                  <br/>
                  <SelectField 
                    name = "employmentStatus"
                    floatingLabelText= "Employment Status"
                    value={this.state.employmentStatus}
                    onChange={this.onChangeEmploymentStatus}
                    fullWidth = {true}
                    >       
                      <MenuItem value={"employed"} primaryText = "Employed" />
                      <MenuItem value={"Self-employed"} primaryText = "Self Employee" />
                      <MenuItem value={"Not Working"} primaryText = "Not Working" />
                      <MenuItem value={"No Preference"} primaryText = "No Preference" />

                  </SelectField>
                  <br/>
                  <SelectField 
                    name = "educationLevel"
                    floatingLabelText= "Education Level"
                    value={this.state.educationLevel }
                    onChange={this.onChangeEducation }
                    fullWidth = {true}
                    >       
                      <MenuItem value={"Masters / Professional / Ph.D’s degree"} primaryText = "Profesional" />
                      <MenuItem value={"Bachelorette / Associate’s degree"} primaryText = "Bachelorette" />
                      <MenuItem value={"Some College/Trade/technical/vocational training"} primaryText = "Some College" />
                      <MenuItem value={"High School"} primaryText = "High School" />
                      <MenuItem value={"Less than high school"} primaryText = "Less than High School" />
                      <MenuItem value={"No Preference"} primaryText = "No Preference" />
                  </SelectField>


                </Grid>
          </Grid>
          </div>
          </Grid>

    {/* ///RIGHT PANEL */}
    {/* /////RESULTS PANEL */}
    
        <Grid item md={8}>

        <div>
              <Grid container  spacing={16}>
                <Grid item sm={4}>
                  <TextField
                    name = "searchText"
                    value = {this.state.searchText}
                    onChange = {this.onTextChange}
                    floatingLabelText = "FILLIN SPACE-RELLENO"
                    fullWidth = {true}>
                  </TextField>
                      
            {/* ////RIGHT PANEL */}
                    <Toolbar >
                      <IconButton  >
                        <Typography variant="h4" color="error" paragraph>
                          Your Best Match!
                        </Typography>
                      </IconButton>
                    </Toolbar>
                </Grid>

              <Grid item sm={8}>
                <TextField
                  name = "searchText"
                  value = {this.state.searchText}
                  onChange = {this.onTextChange}
                  floatingLabelText = "Search for Profiles-- RELLENO"
                  fullWidth = {true}>
                </TextField>
                <br/>

                <br/>

                <br/>

                <Grid item sm={6}>
                  <Typography variant="subtitle1" color="textSecondary">
                    "Take a look of your results!"
                  </Typography>

                      <ul>                        
                        {this.state.searchResults.map(d => <li key={d.email}>{d.firstName} {d.lastName}
                          <IconButton  onClick= {() => this.getProfile (d.email)}>
                              <SearchIcon color="error" fontSize="small"/>
                          </IconButton>    
                        </li>)}

                      </ul>
  
                </Grid>      
                </Grid>
          </Grid>
          </div>


{/* /////end result pane */}

        </Grid>

</Grid>
</Paper>
</React.Fragment>
    )
  }
}


export default SearchOnePage;



