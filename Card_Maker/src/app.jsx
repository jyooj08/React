import { Route, Routes, useNavigate } from 'react-router-dom';
import './app.css';
import Login from './components/login/login.jsx';
import Main from './components/main/main.jsx';
import { initializeApp } from 'firebase/app';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getDatabase } from 'firebase/database';

function App() {
  let navigate = useNavigate();

  const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
    databaseURL: process.env.REACT_APP_DB_URL
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const db = getDatabase(app);

  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then(result => {
        navigate("/main", {state: {
          uid: result.user.uid
        }});
    })
    .catch(error => console.log('error!', error));
  }

  const githubLogin = () => {
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
    .then(result => {
      navigate("/main", {state: {
        uid: result.user.uid
      }});
    })
    .catch(error => console.log('error!', error));
  }

  return (
      <Routes>
        <Route path="/" element={<Login googleLogin={googleLogin} githubLogin={githubLogin} />}>
          <Route path="login"></Route>
        </Route>
        <Route path="/main" element={<Main db={db}/>}></Route>
      </Routes>
  );
}

export default App;
