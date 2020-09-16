import React from 'react';

export default class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Jeffrey",
      age: "20",
      class: "3H"
    };
  }

  changeNameJeffrey = () => {
    this.setState({name: "Jeffrey", age: "20", class: "3H"});
  }
  changeNameSem = () => {
    this.setState({name: "Sem", age: "19", class: "3J"});
  }
  changeNameVince = () => {
    this.setState({name: "Vince", age: "8", class: "1H"});
  }

  render() {
    return (
      <div>
        <div><ul>
          <li>{this.state.name}</li>
          <li>{this.state.age}</li>
          <li>{this.state.class}</li>
        </ul></div>
        <button
          type="button"
          onClick={this.changeNameJeffrey}
        >Jeffrey</button>
                <button
          type="button"
          onClick={this.changeNameSem}
        >Sem</button>
                <button
          type="button"
          onClick={this.changeNameVince}
        >Vince</button>
      </div>
    );
  }
}
