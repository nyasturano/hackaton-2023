
import './App.css';
import Auth from '../../pages/Auth/Auth';
import { Routes, Route } from 'react-router';

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
