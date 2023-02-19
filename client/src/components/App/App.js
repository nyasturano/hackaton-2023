
import './App.css';
import Auth from '../../pages/Auth/Auth';
import { Routes, Route } from 'react-router';
import CompanyPanel from '../../pages/CompanyPanel/CompanyPanel'
import ResidentPanel from '../../pages/ResidentPanel/ResidentPanel'
import ContractorPanel from '../../pages/ContractorPanel/ContractorPanel'
import OrganizationPanel from '../../pages/OrganizationPanel/OrganizationPanel'

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Auth/>}/>
        <Route path="/admin/*" element={<CompanyPanel/>}/>
        <Route path="/resident/*" element={<ResidentPanel/>}/>
        <Route path="/contractor/*" element={<ContractorPanel/>}/>
        <Route path="/organization/*" element={<OrganizationPanel/>}/>
      </Routes>
    </div>
  );
}
export default App;
