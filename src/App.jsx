import { Outlet } from 'react-router-dom';
import NavTab from './components/NavTab';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <>
      <NavTab />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App;
