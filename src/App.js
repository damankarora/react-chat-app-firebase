import './App.css';

import { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';



const googleAuthProvider = new GoogleAuthProvider();

const app = initializeApp({
  apiKey: "AIzaSyCdG-ELH84hYImRKZ4MiGxScred7g2Bi8I",
  authDomain: "fir-try-a9c75.firebaseapp.com",
  projectId: "fir-try-a9c75",
  storageBucket: "fir-try-a9c75.appspot.com",
  messagingSenderId: "407189812932",
  appId: "1:407189812932:web:13dc8d988e0494ad76bb91"
})

const auth = getAuth(app)

function App() {

  const [user] = useAuthState(auth)

  return (
    <div className="App">
      <header className="App-header">
        Hello
        <br />
        {user ? 'Logged In' : <SignIn />}
        {(user && <SignOut />)}
      </header>

      <section>
        
      </section>
    </div>
  );
}

function SignOut(){
  const handleSignOut = ()=>{
    auth.signOut()
    .then(()=>{
      console.log("Sign out");
    })
  }

  return (
    <button onClick={handleSignOut}>Log Out</button>
  )
}

function SignIn() {
  const signInWithGoogle = ()=>{
    signInWithPopup(auth, googleAuthProvider)
    .then((value)=>{
      console.log(value.user)
    })    

  }
  return (    
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  )
}

export default App;
