import { defineStore } from 'pinia'
import { auth } from '@/js/firebase'
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth'
import { useStoreNotes } from './storeNotes'

export const useStoreAuth = defineStore('storeAuth', {
  state: () => {
    return {
      user: {},
    }
  },
  actions: {
    init() {
      const storeNotes = useStoreNotes()
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user.id = user.uid
          this.user.email = user.email
          this.router.push('/')
          storeNotes.init()
        } else {
          this.user = {}
          this.router.replace('/auth')
          storeNotes.clearNotes()
        }
      })
    },
    async registerUser(credentials) {
      await createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
        .then((userCredential) => {
          const user = userCredential.user
          console.log('user ', user)
        })
        .catch((error) => {
          console.log('Error ', error.message)
        })
    },
    loginUser(credentials) {
      signInWithEmailAndPassword(auth, credentials.email, credentials.password)
        .then((userCredential) => {
          const user = userCredential.user
          console.log('User logged in ', user)
        })
        .catch((error) => {
          console.log('Error ', error)
        })
    },
    async logoutUser() {
      await signOut(auth)
        .then(() => {
          console.log('User Signed out')
        })
        .catch((error) => {
          console.log('Error ', error)
        })
    },
  },
})
