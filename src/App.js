import './App.css';
import { NavBar } from './Components/NavBar';
import { Menu } from './Components/Menu';
import { GlobalStyle } from './Components/GlobalStyle';
import {  Banner } from './Components/Banner';


function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Banner />
      <Menu />
    </>
  );
}

export default App;
