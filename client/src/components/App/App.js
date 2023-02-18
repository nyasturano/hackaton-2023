import './App.css';
import Auth from '../../pages/Auth/Auth';
import CompanyPanel from '../../pages/CompanyPanel/CompanyPanel';
<<<<<<< Updated upstream
import { Routes, Route } from 'react-router';

const App = () => {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Auth/>}/>
          <Route path="/admin" element={<CompanyPanel/>}/>
      </Routes>
=======
import Table from '../Table/Table';

const App = () => {
  return (
    <div className='App'>
      <Table/>
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
