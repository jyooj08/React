import React, { Component } from 'react';

class Habit extends Component {
    state = {
        count: 0,
    };

    handleIncrement = event => {
        // state 객체 안에 있는 count를 증가한 뒤 state를 업데이트 한다.
        this.setState({count: this.state.count + 1});
    }

    handleDecrement = event => {
        // state 객체 안에 있는 count를 감소한 뒤 state를 업데이트 한다.
        const count = this.state.count - 1;
        this.setState({count: count < 0 ? 0 : count});
    }

    render() {
        const {name, count} = this.props.habit;
        return (
        <li className="habit">
            <span className="habit-name">{name}</span>
            <span className="habit-count">{count}</span>
            <button className="habit-button increase" onClick={this.handleIncrement}>
                <i className="fas fa-plus-square"></i>
            </button>
            <button className="habit-button decrease" onClick={this.handleDecrement}>
                <i className="fas fa-minus-square"></i>
            </button>
            <button className="habit-button delete">
                <i className="fas fa-trash"></i>
            </button>
        </li>
        );
        
    }
}

export default Habit;