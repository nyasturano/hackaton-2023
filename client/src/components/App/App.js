
import './App.css';
//import Auth from '../../pages/Auth/Auth';
//import CompanyPanel from '../../pages/CompanyPanel/CompanyPanel';
//import { Routes, Route } from 'react-router';

import ChequeInfo from '../ResidentContent/ChequeInfo/ChequeInfo';
const App = () => {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Auth/>}/>
          <Route path="/admin/*" element={<CompanyPanel/>}/>
      </Routes>
    </div>
  );

}

export default App;
