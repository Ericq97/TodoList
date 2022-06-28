import React, { Component } from 'react';
import { withRouter, Redirect } from "react-router-dom";

class ListForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: ""
        };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTitleChange(event) {
        event.preventDefault();
        this.setState({title: event.target.value});
    }

    handleDescriptionChange(event) {
        event.preventDefault();
        this.setState({description: event.target.value});
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.value);
        fetch(`/todolist/${this.state.title}/${this.state.description}`, {method: 'POST'})
        const {history} = this.props;
        history.push("/");
    }

    render() {
        return (
            <div>
                <h1>Add New TodoList</h1>

            <form onSubmit={(event) => this.handleSubmit(event)}>
      <label>
        title
        <input
          type="text"
          name="title"
          onChange={this.handleTitleChange}
        />
      </label>
      <label>
        description
        <input
          type="text"
          name="description"
          onChange={this.handleDescriptionChange}
        />
      </label>
      <input type="submit" title="Submit" />
    </form>
            </div>
        )
    }
}

export default withRouter(ListForm);