// import logo from './logo.svg';
import './App.css';
// import Home from './components/Home/Home';
import ExploreRef from './components/ExploreRef/ExploreRef';
import ReducerCount from './components/ReducerCount/ReducerCount';
import PatientManagement from './components/PatientManagement/PatientManagement';

function App() {
  return (
    <div className="App">
      <ExploreRef></ExploreRef>
      <ReducerCount></ReducerCount>
      <PatientManagement></PatientManagement>
      {/* <Home></Home> */}
    </div>
  );
}

export default App;
