import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBm9DR6kB6OLiN8aJz6cs33YroZfXDnO5c',
  authDomain: 'noteballs-48c49.firebaseapp.com',
  projectId: 'noteballs-48c49',
  storageBucket: 'noteballs-48c49.firebasestorage.app',
  messagingSenderId: '674028270968',
  appId: '1:674028270968:web:1f4f25784c436a8f77448d',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

export { db, auth }
