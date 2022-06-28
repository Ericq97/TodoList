import React, { Component } from 'react';
import { withRouter, NavLink } from "react-router-dom";

class NewItem extends Component {

    constructor(props) {
        super(props);
        this.id = this.props.match.params;
        this.state = {
            value: [],
            todoitem: []
        };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({value: event.target.value});
    }
    handleSubmit(event) {
        event.preventDefault();
        fetch(`/item/${this.id["id"]}/${this.state.value}`, {method: 'POST'});
        const {history} = this.props;
        history.push(`/todolists/${this.id["id"]}`);
    }

    render() {
        return (
            <div>
                <h1>New Item</h1>
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <label>
                    title:
                    <textarea onChange={this.handleChange} />
                    </label>
                    <input type="submit" title="Submit" />
            </form>
            </div>
        )
    }
}

export default withRouter(NewItem);