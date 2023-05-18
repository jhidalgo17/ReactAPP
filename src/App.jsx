import { useState } from 'react'
import { Register } from './components/register';
import { Login } from './components/Login';
import { MainMenu } from './components/MainMenu';
import { MainPage } from './components/MainPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css'

export function App() {
  const [view, setview] = useState("mainpage")

  function changeView(ev) {
    view == "login" ? setview("register") : setview("login")
  }



  function renderView(ev) {
    switch (view) {
      case "mainpage":
        return <MainPage />
        break
      case "register":
        return <Register />
        break;
      case "login":
        return <Login />
        break;
      case "mainmenu":
        return <MainMenu />
        break
      default:
        break;
    }

  }

  return (
    <>
      <div className="appContainer">
        {renderView()}
        <button onClick={changeView}>CHANGE VIEW</button>
      </div>
    </>
  );
}
