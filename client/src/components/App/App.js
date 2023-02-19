
import './App.css';
import Auth from '../../pages/Auth/Auth';
import CompanyPanel from '../../pages/CompanyPanel/CompanyPanel';
import ResidentPanel from '../../pages/ResidentPanel/ResidentPanel';
import { Routes, Route } from 'react-router';
import MeterReadings from '../ResidentContent/MeterReadings/MeterReadings';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Auth/>}/>
        <Route path="/admin/*" element={<ResidentPanel/>}/>
      </Routes>
    </div>
  );

}

export default App;
