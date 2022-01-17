import { Route, Routes } from 'react-router-dom';
import './app.css';
import Login from './components/login/login.jsx';
import Main from './components/main/main.jsx';

function App({fb}) {
  return (<>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossOrigin="anonymous"></link>
      <Routes>
        <Route path="/" element={<Login fb={fb} />}>
          <Route path="login"></Route>
        </Route>
        <Route path="/main" element={<Main db={fb.db} fb={fb}/>}></Route>
      </Routes>
  </>);
}

export default App;
