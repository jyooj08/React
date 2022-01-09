import { Route, Routes, useNavigate } from 'react-router-dom';
import './app.css';
import Login from './components/login/login.jsx';
import Main from './components/main/main.jsx';
import { initializeApp } from 'firebase/app';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getDatabase } from 'firebase/database';

function App({fb}) {
  return (
      <Routes>
        <Route path="/" element={<Login fb={fb} />}>
          <Route path="login"></Route>
        </Route>
        <Route path="/main" element={<Main db={fb.db} fb={fb}/>}></Route>
      </Routes>
  );
}

export default App;
