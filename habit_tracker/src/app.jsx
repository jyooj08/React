import './app.css';
import Habit from './components/habit';
import Habits from './components/habits';
import React, { Component } from 'react';
import Navbar from './components/navbar';
import AddForm from './components/addForm';

class App extends Component {
  state = {
      habits: []
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

  handleAdd = (name) => {
    let habits = [...this.state.habits];
    let id = name.split('').reduce((acc, cur, i) => {
        return acc + cur.charCodeAt(0);
    }, 0);
    habits.push({id, name, count: 0});
    this.setState({habits});
  }

  handleReset = () => {
      // this.setState({habits: []});
      const habits = this.state.habits.map(habit => {
        habit.count = 0;
        return habit;
      });
      this.setState({habits});
  }

  render(){
    return (<>
      <Navbar totalCount={this.state.habits.filter(item => item.count > 0).length} />
      <section>
        <AddForm handleAdd={this.handleAdd} handleReset = {this.handleReset}></AddForm>
        <Habits habits={this.state.habits}
        handleIncrement={this.handleIncrement}
        handleDecrement={this.handleDecrement}
        handleDelete={this.handleDelete} />
      </section>
    </>);
  }
}

export default App;
