import logo from './logo.svg';
import './App.css';
import Addtask from './component/Addtask';
import TaskList from './component/TaskList';

function App() {
  return (
    <div className="App" style={{backgroundColor:'#C3E2C2'}}>
     <h2>Tasks List </h2>
     <Addtask/>
     <TaskList/>
    </div>
  );
}

export default App;
