
import './App.css';
import Auth from '../../pages/Auth/Auth';
import CompanyPanel from '../../pages/CompanyPanel/CompanyPanel';
import { Routes, Route } from 'react-router';
import ContractorPanel from '../../pages/ContractorPanel/ContractorPanel';

/*<Routes>
        <Route path="/" element={<Auth/>}/>
        <Route path="/admin/*" element={<CompanyPanel/>}/>
      </Routes>*/

const App = () => {
  return (
    <div className="App">
     <ContractorPanel/>
    </div>
  );

}

export default App;
