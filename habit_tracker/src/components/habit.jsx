import React, { Component } from 'react';

class Habit extends Component {
    render() {
        return (
        <li className="habit">
            <span className="habit-name">Reading</span>
            <span className="habit-count">8</span>
            <button className="habit-button increase">
                <i className="fas fa-plus-square"></i>
            </button>
            <button className="habit-button decrease">
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