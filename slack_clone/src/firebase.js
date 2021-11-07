import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCVaRIwm3Hxg1mhgQ26nRN0R8vEMX0CpAo",
    authDomain: "slack-clone-5be29.firebaseapp.com",
    projectId: "slack-clone-5be29",
    storageBucket: "slack-clone-5be29.appspot.com",
    messagingSenderId: "898895655497",
    appId: "1:898895655497:web:e790d9f3800259604b4598"
  };

const app = initializeApp(firebaseConfig)
const auth = getAuth()
const db = getFirestore(app)
const provider = new GoogleAuthProvider();
    
export { db, auth, provider } 