import React from "react";
import axios from "axios";
import Input from "../../story/Input/Input";
import Button from "../../story/Button/Button";
import './PersonInput.css'
export default class Personinput extends React.Component {
  state = {
    name: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      name: this.state.name,
    };

    axios
      .post("https://jsonplaceholder.typicode.com/users", { user })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      this.setState({ person: res.data });
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} class='flex-inline' >
        <label class='space-x content-center'> Person name:</label>
        <Input
          className={`space-x`}
          type="text"
          name="name"
          size="small"
          placeholder="Type something"
          onChange={this.handleChange}
        />
        <Button
          className={`space-x`}
          bgcolor="green"
          boderrd="2rem"
          color="#fff"
          fontsize="14px"
          height="2rem"
          padding="0.5rem"
          text="Post API"
          variant=""
          width="5.5rem"
        >
          Post API
        </Button>
      </form>

      //   <div>
      //     {this.state.person.map((person) => (
      //       <li key={person.id}>{person.name}</li>
      //     ))}
      //   </div>
    );
  }
}
