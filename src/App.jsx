import { Outlet } from 'react-router-dom';
import NavTab from './components/NavTab';
import FooterTab from './components/FooterTab';
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
