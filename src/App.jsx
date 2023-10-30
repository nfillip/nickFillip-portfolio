import { Outlet } from 'react-router-dom';
import NavTab from './components/NavTab/NavTab';
import FooterTab from './components/FooterTab/FooterTab';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
      <NavTab />
      <main id = "bs-override">
        <Outlet />
      </main>
      <FooterTab />
    </>
  )
}

export default App;
