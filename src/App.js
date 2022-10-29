import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import ResteBudget from './components/ResteBudget';
import DepenseTotal from './components/DepenseTotal';
import Graph from './components/Graph';
import Form from './components/Form';
import { AppProvider } from './context/AppContext';
import Budgetaire from './components/Budgetaire';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <div className='container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800'>
          <div className='mt-3'>
            <Header />
          </div>
          <div className='row mt-3'>
            <div className='col-sm'>
              <Budgetaire />
            </div>
            <div className='col-sm'>
              <ResteBudget />
            </div>
            <div className='col-sm'>
              <DepenseTotal />
            </div>
            <div className='grid md:grid-cols-2 gap-4'>
              <Graph />
              <Form />
            </div>
          </div>
        </div>
      </div>
    </AppProvider>

  );
}


export default App;
