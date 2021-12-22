import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import './app.css';
import Login from './components/login';
import Main from './components/main';
import { initializeApp } from 'firebase/app';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from 'react';

function App() {
  const [user, setUser] = useState(null);
  let navigate = useNavigate();

  const firebaseConfig = {
    apiKey: "AIzaSyDTuOznOUriBcOn9MgpN-TTCFueSzF6CJY",
    authDomain: "business-card-maker-53167.firebaseapp.com",
    projectId: "business-card-maker-53167",
    storageBucket: "business-card-maker-53167.appspot.com",
    messagingSenderId: "375309422156",
    appId: "1:375309422156:web:dc3e80953fe4ec3b042ee9",
    measurementId: "G-M7Y6SM5EP9"
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then(result => {
        console.log(result);
        setUser(result.user);
        navigate("/main");
    })
    .catch(error => console.log('error!', error));
  }

  const githubLogin = () => {
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
    .then(result => {
      console.log(result);
      setUser(result.user);
      navigate("/main");
    })
    .catch(error => console.log('error!', error));
  }

  return (
      <Routes>
        <Route path="/" element={<Login googleLogin={googleLogin} githubLogin={githubLogin}/>}>
          <Route path="login"></Route>
        </Route>
        <Route path="/main" element={<Main user={user}/>}></Route>
      </Routes>
  );
}

export default App;
