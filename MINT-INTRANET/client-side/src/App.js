import './App.css';
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login';
import Home from './pages/Home';
import Error from './pages/Error';
import { CookiesProvider } from 'react-cookie'
import { useCookies } from 'react-cookie'
import ProtectedRoute from './components/ProtectedRoute';
import News from './pages/News';
import SingleNews from './pages/SingleNews';
import Dashboard from './pages/Dashboard';
import Rooms from './pages/Rooms';
import Meeting from './pages/Meeting';

function App() {

  const [token] = useCookies(['mytoken'])

  return (
    <CookiesProvider>
      
        <div className="App">
            <Routes>
              <Route path={'/'} element={<Login />} />
              <Route element={<ProtectedRoute token={token['mytoken']} />} >
                <Route path={'/home'} element={<Home />} />
                <Route path={'/news'} element={<News />} />
                <Route path={'/news/:id'} element={<SingleNews />} />
                <Route path={'/dashboard'} element={<Dashboard />} />
                <Route path={'/dashboard/rooms'} element={<Rooms />} />
                <Route path={'/dashboard/meeting'} element={<Meeting />} />
                <Route path={'*'} element={<Error />} />
              </Route>
            </Routes>
        </div>
      
    </CookiesProvider>
  );
}

export default App;
