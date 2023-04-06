import './App.css';

//component imports here
import Header from './components/Header';
import ToDoForm from './components/ToDoForm';
import FilterForm from './components/FilterForm';



function App() {
  return (
    <div className="App">

      <div className='bg'>
      </div>
      <div>
        <Header />
      </div>
      <div className='forms'>
        <ToDoForm />
        <FilterForm />
      </div>

    </div>
  );
}

export default App;
