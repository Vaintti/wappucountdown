import React, { Component } from 'react';
import logo from './Teekkarilakki.png';
import './App.css';
import Numberbubble from './Numberbubble';

class App extends Component {
  constructor(props){
    super(props);
    var wappuyear = 2017;
    var wappumonth = 4;
    var wappuday = 1;
    var wappudate = new Date(wappuyear,wappumonth,wappuday);
    console.log(wappudate.toString());  
    var timetowappu = new Date(Date.parse(wappudate)-Date.parse(Date()));
    this.state = {vappuun: timetowappu};
  }
  
  tick() {
    this.setState((prevState) => ({
      vappuun: new Date(Date.parse(prevState.vappuun) - 1)
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Koska on Wappu?</h2>
        </div>
        <div className="App-turku">
          Aikaa Turun Teekkariwapun alkuun
          <div className="App-countdown">
            <Numberbubble name="Päiviä" number={Math.floor(Date.parse(this.state.vappuun)/1000/60/60/24)-18} />
            <Numberbubble name="Tunteja" number={this.state.vappuun.getHours()} />
            <Numberbubble name="Minuutteja" number={this.state.vappuun.getMinutes()} />
            <Numberbubble name="Sekunteja" number={this.state.vappuun.getSeconds()} />
          </div>
        </div>
        <div className="App-aatto">
          Wappuaattoon on
          <div className="App-countdown">
            <Numberbubble name="Päiviä" number={Math.floor(Date.parse(this.state.vappuun)/1000/60/60/24)} />
            <Numberbubble name="Tunteja" number={this.state.vappuun.getHours()} />
            <Numberbubble name="Minuutteja" number={this.state.vappuun.getMinutes()} />
            <Numberbubble name="Sekunteja" number={this.state.vappuun.getSeconds()} />
          </div>
        </div>
        <div className="App-extras">
          Wapun aikana voi vaikka kuunnella rakkauden Wappuradiota, joka löytyy tästä linkistä <a href="http://www.wappuradio.fi/">Wappuradio</a>
        </div>
        <div className="App-footer">
        
          © 2017 Antti Vainikka Some Rights Reserved (Check me on github <a href="https://github.com/Vaintti">here</a>)
        </div>
        </div>
    );
  }
}

export default App;
