import React, { Component } from 'react';
import { withRouter, Link } from "react-router-dom";

class Todoitems extends Component {

    constructor(props) {
        super(props);
       this.id = this.props.match.params;
        this.state = {
            todoitems: [],
            todolist: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDoneSubmit = this.handleDoneSubmit.bind(this);
    }

    componentDidMount() {
        fetch(`/todolists/${this.id["id"]}`)
        .then(res => res.json())
        .then(todoitems => this.setState({todoitems}));
    }

    

    handleSubmit(event, itemid) {
        console.log("hello");
        event.preventDefault();
        fetch(`/item/delete/${itemid}`, {method: 'DELETE'});
        window.location.reload(false);
    }

    handleDoneSubmit(event, itemid) {
        console.log("hello");
        event.preventDefault();
        fetch(`/item/done/${itemid}`, {method: 'PUT'});
        window.location.reload(false);
    }

    render() {
        return (
            <div>
                <h1>TodoItems</h1>
                {this.state.todoitems.map(todoitem =>
                <div>
                 <Link to={`/todolists/item/edit/${todoitem.id}`}>
                <li>{todoitem.title}</li>
                 </Link>
                 <form onSubmit={(event) => this.handleSubmit(event, todoitem.id)}>
                 <button type="delete" title="Delete"> Delete </button>
            </form>
            <form onSubmit={(event) => this.handleDoneSubmit(event, todoitem.id)}>
                 <button type="done" title="Done"> Done </button>
            </form>
                 </div>
                    )}
                    <Link to={`/todolists/newitem/${this.id["id"]}`}>
                <button>Add New Item</button>
                 </Link>
                 <Link to={"/"}>
                <button>All TodoLists</button>
                 </Link>
            </div>
        )
    }
}

export default withRouter(Todoitems);