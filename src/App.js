import logo from './logo.svg';
import './App.css';
import AddVehicle from './components/AddVehicle';
import SearchVehicle from './components/SearchVehicle';
import DeleteVehicle from './components/DeleteVehicle';
import ViewAllVehicles from './components/ViewAllVehicles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <AddVehicle/> }/>
      <Route path="/search" element={ <SearchVehicle/> }/>
      <Route path="/delete" element={ <DeleteVehicle/> }/>
      <Route path="/viewall" element={ <ViewAllVehicles/> }/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
