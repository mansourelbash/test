import { Outlet } from 'react-router-dom';
import './App.css'
import Home from './component/Home'
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function App() {


  return (
    <>
    <Outlet></Outlet>
    </>
  )
}

export default App
