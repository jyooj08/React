import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
    render() {
        const habits = this.props.habits;
        return (
            <ul>
                {
                    habits.map(habit =>
                        // props의 key: 고유한 값이어야 함! 배열의 index를 사용하면 안됨
                        <Habit key={habit.id} habit={habit} 
                        handleIncrement={this.props.handleIncrement}
                        handleDecrement={this.props.handleDecrement}
                        handleDelete={this.props.handleDelete} />)
                }
            </ul>
        );
    }
}

export default Habits;