import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app.css';
import Login from './components/login';
import Main from './components/main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}>
          <Route path="login"></Route>
        </Route>
        <Route path="/main" element={<Main/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
