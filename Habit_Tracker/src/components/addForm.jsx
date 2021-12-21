import React, { PureComponent } from 'react';

class AddForm extends PureComponent {
    
    /* 유지니 코드
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
    */

    inputRef = React.createRef();

    onSubmit = (e) => {
        e.preventDefault();
        const name = this.inputRef.current.value;
        name && this.props.handleAdd(name);
        this.inputRef.current.value="";
    }

    render() {
        /* 유지니 코드
        return (<>
            <input className="add-input" placeholder="Enter Habit" value={this.state.content} onChange={this.getInput} onKeyPress={this.onKeyPress}></input>
            <button className="add-button" onClick={this.handleAdd}>Add</button>
        </>);*/

        return (
            <form className="add-form" onSubmit={this.onSubmit}>
                <input ref={this.inputRef} type="text" className="add-input" placeholder="Enter Habit" />
                <button className="add-button">Add</button>
                <button className="habit-reset" onClick={this.props.handleReset}>Reset All</button>
            </form>
        );
    }
}

export default AddForm;