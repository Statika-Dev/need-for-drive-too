import './App.css';
import React, { useState } from "react";
import burgerMenu from'./menu_btn.svg';
import Menu from './burgerMenu/Menu';



function App() {

  const [menuActive, setMenuActive] = useState(false)

  const items = [{value:"парковка", href:"/parkovka"},
  {value:"страховка", href:"/strahovka"},
  {value:"бензин", href:"/benzin"},
  {value:"обслуживание", href:"/obcluzivanie"}]

  return (
    <div className="app">
      <div className="nav">
        <div className="burger-btn" onClick={() => setMenuActive(!menuActive)}>
          <img src={burgerMenu} alt="no download"></img>
        </div>
      </div>
      
      <Menu active = {menuActive} setActive = {setMenuActive} items={items}/>
    </div>
  );
}

export default App;
