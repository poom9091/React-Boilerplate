import React from "react";
import axios from "axios";
import Input from "../../story/Input/Input";
import Button from "../../story/Button/Button";
import Center from "../../story/Center/Center";
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
      <Center>
        <form onSubmit={this.handleSubmit}>
          <label> Person name:</label>
          <Input type="text" name="name" size="small" placeholder='Type something' onChange={this.handleChange} />
          <Button type="submit" variant="primary">
            POST API
          </Button>
        </form>
      </Center>
      //   <div>
      //     {this.state.person.map((person) => (
      //       <li key={person.id}>{person.name}</li>
      //     ))}
      //   </div>
    );
  }
}
