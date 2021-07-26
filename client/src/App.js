import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router';
import LoginComponent from './components/Login/LoginComponent'
import Testcomp from './components/Home/Testcomp';

function App() {
  return (
    <>
      {/* <div className="col-2 fill">
        Testing
      </div>

      <div className="col-10 fill">Keval rikin</div> */}
      {/* <div className="col-2">
        <Route path="/rikin">
          <LoginComponent data="jenil"></LoginComponent>
        </Route>
        <Route path="/login">
          <LoginComponent data="keval"></LoginComponent>
        </Route>
      </div>
      <div className="col-3">
        <LoginComponent data="gandhi"></LoginComponent>
      </div> */}
      <Route path="/login">
        <LoginComponent></LoginComponent>
      </Route>


      <div className="col-3">
        <Route path="/home">
          <Testcomp></Testcomp>
        </Route>
      </div>
      <div className="col-9">
        <Route path="/home">
          <Testcomp></Testcomp>
        </Route>
      </div>
    </>
  );
}

export default App;
