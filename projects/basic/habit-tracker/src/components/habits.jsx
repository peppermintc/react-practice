import React, { Component } from 'react'
import Habit from './habit';
import HabitAddForm from './habitAddForm';

export default class Habits extends Component {
    handleAdd = name => {
        this.props.onAdd(name);
    };
    
    render() {
        return (
            <div className="habits">
                <HabitAddForm onAdd={this.handleAdd}/>
                <ul>
                    {this.props.habits.map(habit => (
                        <Habit 
                            key={habit.id} 
                            habit={habit} 
                            onIncrement={this.props.onIncrement} 
                            onDecrement={this.props.onDecrement} 
                            onDelete={this.props.onDelete}
                        />
                    ))}
                </ul>
                <button className="habits-reset" onClick={this.props.onReset}>Reset All</button>
            </div>
        )
    }
}
