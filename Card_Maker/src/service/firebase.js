import { getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { get, getDatabase, ref, set } from 'firebase/database';
import Card from '../common/card.js';

class Firebase{
    firebaseConfig = {
        apiKey: process.env.REACT_APP_API_KEY,
        authDomain: process.env.REACT_APP_AUTH_DOMAIN,
        projectId: process.env.REACT_APP_PROJECT_ID,
        storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
        appId: process.env.REACT_APP_APP_ID,
        measurementId: process.env.REACT_APP_MEASUREMENT_ID,
        databaseURL: process.env.REACT_APP_DB_URL
      };
      app = initializeApp(this.firebaseConfig);
      auth = getAuth();
      db = getDatabase(this.app);

      googleLogin = (navigate) => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(this.auth, provider)
        .then(result => {
            navigate("/main", {state: {
              uid: result.user.uid
            }});
        })
        .catch(error => console.log('error!', error));
      }

      githubLogin = (navigate) => {
        const provider = new GithubAuthProvider();
        signInWithPopup(this.auth, provider)
        .then(result => {
          navigate("/main", {state: {
            uid: result.user.uid
          }});
        })
        .catch(error => console.log('error!', error));
      }

      autoLogin = (navigate) => {
          onAuthStateChanged(this.auth, user => {
              if(user){
                  navigate('/main', {
                      state: {uid: user.uid}
                  })
              }
          })
      }

      logout = (navigate) => {
          this.auth.signOut();
          navigate('/');
      }

      getUser = () => {
          return this.auth.currentUser;
      }

      getCardsFromDB = (user) => {
          const cardsRef = ref(this.db, `${user}/cards`);
          return get(cardsRef).then(result => {
            let cards = [];
            const data = result.val();

            for(let key in data){
              let c = new Card();
              c.set(key, data[key]);
              cards.push(c);
            }
            return cards;
          });
      }

      setCardInDB = (user, card) => {
        set(ref(this.db, `${user}/cards/${card.id}`), {
            name: card.name,
            company: card.company,
            color: card.color,
            title: card.title,
            email: card.email,
            message: card.message,
            fileName: card.fileName,
            fileURL: card.fileURL
        });
      }

      deleteCardInDB = (user, card) => {
        set(ref(this.db, `${user}/cards/${card.id}`), null);
      }
}

export default Firebase;