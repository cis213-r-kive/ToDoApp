import './App.css';

//component imports here
import Header from './components/Header';
import ToDoForm from './components/ToDoForm';


function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <ToDoForm />
      </div>
    </div>
  );
}

export default App;
