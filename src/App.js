import './App.css';

//component imports here
import Header from './components/Header';
import ToDoFrom from './components/ToDoFrom';


function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <ToDoFrom />
      </div>
    </div>
  );
}

export default App;
