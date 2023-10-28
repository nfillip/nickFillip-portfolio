import { Outlet } from 'react-router-dom';
import NavTab from './components/NavTab/NavTab';
import FooterTab from './components/FooterTab/FooterTab';
import projectCard from './components/projectCard/projectCard';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
      <NavTab />
      <main>
        <Outlet />
      </main>
      <FooterTab />
    </>
  )
}

export default App;
