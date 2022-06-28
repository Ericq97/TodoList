import React, { Component } from 'react';
import { withRouter, Link } from "react-router-dom";

class Todolists extends Component {
    constructor() {
        super();
        this.state = {
            todolists: []
        }
    }

    componentDidMount() {
        fetch('/todolists')
        .then(res => res.json())
        .then(todolists => this.setState({todolists}));
    }

    handleSubmit(event, listid) {
        event.preventDefault();
        fetch(`/todolists/delete/${listid}`, {method: 'DELETE'});
        window.location.reload(false);
    }

    render() {
        return (
            <div>
                <h1>TodoLists</h1>
            <ul>
                {this.state.todolists.map(todolist =>
                <div>
                <Link to={`/todolists/${todolist.id}`}>
                <li key={todolist.id}>{todolist.title}</li>
                </Link>
                <form onSubmit={(event) => this.handleSubmit(event, todolist.id)}>
                 <button type="delete" title="Delete"> Delete </button>
            </form>
                </div>
                    )}
            </ul>
            <Link to={'/newtodolist'}>
                <button>Add New TodoList</button>
                 </Link>
            </div>
        )
    }
}

export default withRouter(Todolists);