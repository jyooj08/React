import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

class AuthService{
    login(providerName){
        let authProvider;
        const auth = getAuth();

        if(providerName == 'Google') authProvider = new GoogleAuthProvider();
        else if (providerName == 'GitHub') authProvider = new GithubAuthProvider();
        
        return signInWithPopup(auth, authProvider);
    }
}

export default AuthService;