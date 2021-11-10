import React, { Component } from 'react';

class AddForm extends Component {
    state = {
        content: "",
    }

    handleAdd = () => {
        let name = this.state.content.split('');
        let id = name.reduce((acc, cur, i) => {
            return acc + cur.charCodeAt(0);
        }, 0);
        this.props.handleAdd(this.state.content, id);
        this.setState({content: ""});
    }

    getInput = (e) => {
        this.setState({content: e.target.value});
    }

    onKeyPress = (e) => {
        if(e.key === 'Enter') this.handleAdd();
    }

    render() {
        return (<>
            <input placeholder="Enter Habit" value={this.state.content} onChange={this.getInput} onKeyPress={this.onKeyPress}></input>
            <button className="add-button" onClick={this.handleAdd}>Add</button>
        </>);
    }
}

export default AddForm;