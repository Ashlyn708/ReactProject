import logo from './logo.svg';
import './App.css';
import TaskList from './TasksList';

function App() {   
  return (
    <div className="App">
      <h1>To-do List</h1>
      <input></input>
      <button>Add Todo</button>
      <TaskList/>
      <TaskList/>
    </div>
  );
}

export default App;
