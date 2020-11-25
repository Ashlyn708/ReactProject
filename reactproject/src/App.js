import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TaskList from './TasksList';

class App extends Component {
    constructor(){
        super()
        this.state = {
            todoList: null
        }
    }
    render(){
        return (
            <div className="App">
                <h1>To-do List</h1>
                <input></input>
                <button onClick={(e)=>this.addTodo(e)}>Add Todo</button>
                <TaskList title={'Pending ToDo'} buttonText={'Done'} tasks={this.state.todoList} buttonFunction={this.removeTodo}/>
                <TaskList title={'Completed'} buttonText={'Delete'} tasks={'done'} buttonFunction={this.removeTodo}/>
            </div>
        );
    }
    
    addTodo(e){
        console.log(e);
        this.setState({todoList:'item1'});
    }

    removeTodo(){
        if(this.state.todoList!=null){
                    this.setState({todoList:null})

        }
    }
}

export default App;
