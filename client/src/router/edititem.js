import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class ItemForm extends Component {

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


    componentDidMount() {
        fetch(`/item/${this.id["id"]}`)
        .then(res => res.json())
        .then(todoitem => this.setState({todoitem}, () => console.log(todoitem)));
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({value: event.target.value});
    }
    handleSubmit(event) {
        event.preventDefault();
        const listID = this.state.todoitem[0].category;
        fetch(`/item/update/${this.state.todoitem[0].id}/${this.state.todoitem[0].category}/${this.state.value}`, {method: 'PUT'});
        const {history} = this.props;
        history.push(`/todolists/${listID}`);
    }

    render() {
        return (
            <div>
                <h1>Update Item</h1>
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <label>
                    title:
                    <textarea value={this.state.todoitem.title} onChange={this.handleChange} />
                    </label>
                    <input type="submit" title="Submit" />
            </form>
            </div>
        )
    }
}

export default withRouter(ItemForm);