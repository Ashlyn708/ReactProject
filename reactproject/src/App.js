import React, {Component} from 'react';
import logo from './logo.svg';
import turkey from './turkey.jpg';
import './App.css';
import TaskList from './TasksList';

class App extends Component {
    constructor(){
        super()
        this.state = {
            todoList: ['cook Mac n Cheese','take pictures'],
            completeList:['stuff turkey'],
            task:''
        }
    }
    render(){
        return (
            <div className="App">
                <h1 className='App-header'>Thanksgiving To-do List</h1>
                <img className = 'turkeypic' src={turkey} alt='turkey pic'/>
                <form onSubmit={(e) => this.addTodo(e)}>
                    <input
                        type = 'text'
                        className = 'input'
                        placeholder = 'Enter ToDo item'
                        value = {this.state.task}
                        onChange = {(e)=> this.setState({task:e.target.value})}
                    />
                    <button className='button' type='submit'>Add Todo</button>
                </form>
                <TaskList title={'Pending Task:'} buttonText={'Done'} tasks={this.state.todoList} buttonFunction={this.removeTodo}/>
                <TaskList title={'Completed Task:'} buttonText={'Delete'} tasks={this.state.completeList} buttonFunction={this.deleteTodo}/>
            </div>
        );
    }
    
    addTodo(e){
        e.preventDefault();
        console.log(this.state.task);
        this.setState({task:'',todoList:[ ...this.state.todoList,this.state.task]});
        
        //this.setState({todoList:'item1'});
    }

    removeTodo= key=>{
        console.log(key);
        let todoList =  this.state.todoList;
        let index = todoList.indexOf(key);
        if(index>-1){
            todoList.splice(index,1);
            this.setState({todoList:todoList});
            this.setState({completeList:[ ...this.state.completeList,key]});
   
        }
    }
       // if(this.state.todoList!=null){
        //            this.setState({todoList:null})

      //  }

    deleteTodo = key =>{
        console.log(key);
        let completeList =  this.state.completeList;
        let index = completeList.indexOf(key);
        if(index>-1){
            completeList.splice(index,1);
            this.setState({completeList:completeList});
   
        }
    }
}

export default App;
