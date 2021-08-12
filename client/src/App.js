import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router';
import LoginComponent from './components/Login/LoginComponent'
import SideNavbar from './components/Home/SideNavbar';
import TransactionComponent from './components/Home/TransactionComponent';
import HomeComponent from './components/Home/HomeComponent';
import CardComponent from './components/Home/CardComponent';
import RightComponent from './components/Home/RightComponent';
import TempSideNavbar from './components/Home/TempSideNavbar';

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


      <div className="col-2">
        <Route path="/home">
          {/* <SideNavbar></SideNavbar> */}
          <TempSideNavbar></TempSideNavbar>

        </Route>
        <Route path="/transaction">
          <TempSideNavbar></TempSideNavbar>
        </Route>
        <Route path="/ecard">
          <TempSideNavbar></TempSideNavbar>
        </Route>
      </div>
      <div className="col-9 custcol9">

        <Route path="/home">
          <RightComponent component_name="home"></RightComponent>
        </Route>
        <Route path="/transaction">
          <RightComponent component_name="transaction"></RightComponent>
        </Route>
        <Route path="/ecard">
          <RightComponent component_name="ecards"></RightComponent>
        </Route>
      </div>
    </>
  );
}

export default App;
