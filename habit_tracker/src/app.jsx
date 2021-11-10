import './app.css';
import Habit from './components/habit';
import Habits from './components/habits';
import React, { Component } from 'react';
import Navbar from './components/navbar';
import AddForm from './components/addForm';

class App extends Component {
  state = {
      habits: [
          {id: 1, name: 'Reading', count: 0}, 
          {id: 2, name: 'Running', count: 0},
          {id: 3, name: 'Coding', count: 0}
      ],
  };

  handleIncrement = (habit) => {
      let habits = [...this.state.habits];
      let idx = habits.indexOf(habit);
      habits[idx].count++;
      this.setState({habits});
  }

  handleDecrement = (habit) => {
      let habits = [...this.state.habits];
      let idx = habits.indexOf(habit);
      let count = habits[idx].count - 1;
      habits[idx].count = count < 0 ? 0 : count;
      this.setState({habits});
  }

  handleDelete = (habit) => {
      let habits = [...this.state.habits];
      habits = habits.filter(h => h !== habit);
      this.setState({habits});
  }

  handleAdd = (habitName, id) => {
    let habits = [...this.state.habits];
    habits.push({id: id, name: habitName, count: 0});
    this.setState({habits});
  }

  render(){
    return (<>
      <Navbar totalCount={this.state.habits.filter(item => item.count > 0).length} />
      <AddForm handleAdd={this.handleAdd}></AddForm>
      <Habits habits={this.state.habits}
      handleIncrement={this.handleIncrement}
      handleDecrement={this.handleDecrement}
      handleDelete={this.handleDelete} />
    </>);
  }
}

export default App;
