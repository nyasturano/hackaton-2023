
import './App.css';
import Auth from '../../pages/Auth/Auth';
import { Routes, Route } from 'react-router';
import CompanyPanel from '../../pages/CompanyPanel/CompanyPanel';
import ResidentPanel from '../../pages/ResidentPanel/ResidentPanel';

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
