import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
    state = {
        habits: [
            {id: 1, name: 'Reading', count: 0}, 
            {id: 2, name: 'Running', count: 0},
            {id: 3, name: 'Coding', count: 0}
        ],
    };

    handleIncrement = (habit) => {
        console.log('handleIncreament', habit);
    }

    handleDecrement = (habit) => {
        console.log('handleDecreament', habit);
    }

    handleDelete = (habit) => {
        console.log('handleDelete', habit);
    }

    render() {
        return (
            <ul>
                {
                    this.state.habits.map(habit =>
                        // props의 key: 고유한 값이어야 함! 배열의 index를 사용하면 안됨
                        <Habit key={habit.id} habit={habit} 
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                        onDelete={this.handleDelete} />
                )}
            </ul>
        );
    }
}

export default Habits;