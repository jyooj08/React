import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

class AuthService{
    login(providerName){
        let authProvider;
        const auth = getAuth();

        if(providerName == 'Google') authProvider = new GoogleAuthProvider();
        else if (providerName == 'GitHub') authProvider = new GithubAuthProvider();
        
        return signInWithPopup(auth, authProvider);
    }

    logout(){
        const auth = getAuth();
        signOut(auth);
    }

    onAuthChange(onUserChanged){
        const auth = getAuth();
        onAuthStateChanged(auth, user => {
            onUserChanged(user);
        })
    }
}

export default AuthService;