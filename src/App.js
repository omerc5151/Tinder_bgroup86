import React, { Component } from "react";
import "./App.css";
import Profile from "./Profile/Profile";
import Filter from "./Filter/Filter";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import red from "@material-ui/core/colors/red";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";

class App extends Component {
  state = {
    minValue: "min",
    maxValue: "max",
    start: true,
    gender: "",
    personres: [],
    personIndex: -1,
    img: "",
    name: "",
    age: "",
    height: "",
    location: "",
    personIndex: 0,
    persons: []
  };
  componentDidMount() {
    const url = "http://proj.ruppin.ac.il/bgroup86/test1/tar4/api/person";
    fetch(url)
      .then(this.handleErrors)
      .then(response => response.json())
      .then(data => this.setState({ persons: data }));
  }
  handleErrors = response => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  };

  show = event => {
    this.setState({ start: false });
    let result = [];
    const per = this.state.persons;
    //console.log(per.length);
    for (let i = 0; i < per.length; i++) {
      if (
        this.state.gender === per[i].Gender &&
        this.state.minValue <= per[i].Age &&
        this.state.maxValue >= per[i].Age
      ) {
        result.push(per[i]);
      }
    }
    const p = [...result];
    console.log(p);
    this.setState({ personres: [...p] });
    if (p.length > 0) {
      this.setState({
        img: p[0].Image,
        name: p[0].Name + " " + p[0].FamilyName,
        age: p[0].Age,
        location: p[0].Address,
        height: p[0].Height,
        personIndex: 1
      });
    } else {
      this.setState({
        img:
          "https://cdn.dribbble.com/users/1554526/screenshots/3399669/no_results_found.png"
      });
    }
  };

  updatemin = event => {
    this.setState({ minValue: event.target.value });
  };

  updateMax = event => {
    this.setState({ maxValue: event.target.value });
  };

  updateGender = event => {
    this.setState({ gender: event.target.value });
  };

  nextP = event => {
    console.log(this.state.personres);
    const index = this.state.personIndex;
    const pa = this.state.personres;
    if (pa.length > index) {
      this.setState({
        img: pa[index].Image,
        name: pa[index].Name + " " + pa[index].FamilyName,
        age: pa[index].Age,
        location: pa[index].Address,
        height: pa[index].Height,
        personIndex: index + 1
      });
    }
    if (pa.length == index) {
      this.setState({ personIndex: 0 });
    }
  };

  render() {
    console.log(this.state.persons);
    return (
      <div className="container-fluid">
        <Card className="container-fluid main">
          <CardHeader
            avatar={<Avatar aria-label="Recipe">T</Avatar>}
            title="Tinder"
            subheader="by Shir Faruhi, Netta Sapir, Omer Cohen"
          />

          <Filter
            genderChange={this.updateGender}
            minChange={this.updatemin}
            maxChange={this.updateMax}
            click={this.show}
          />
          {this.state.start === true ? null : (
            <Profile
              src={this.state.img}
              name={this.state.name}
              age={this.state.age}
              location={this.state.location}
              height={this.state.height}
              clickNext={this.nextP}
            />
          )}
        </Card>
      </div>
    );
  }
}

export default App;
