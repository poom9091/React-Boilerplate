import React from "react";
import axios from "axios";
import Input from "../../story/Input/Input";
import Button from "../../story/Button/Button";

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
      <form onSubmit={this.handleSubmit} >
        <div className="flex-inline content-center">
        <label> Person name:</label>
        <Input
          type="text"
          name="name"
          size="small"
          placeholder="Type something"
          onChange={this.handleChange}
        />
        <Button
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
        </div>
      </form>

      //   <div>
      //     {this.state.person.map((person) => (
      //       <li key={person.id}>{person.name}</li>
      //     ))}
      //   </div>
    );
  }
}
