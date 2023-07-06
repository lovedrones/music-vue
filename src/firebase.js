import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyDQmYvKW9LbQFFXkuBa_C4Bi7V1PIzNQTM',
  authDomain: 'music-cc2ed.firebaseapp.com',
  projectId: 'music-cc2ed',
  storageBucket: 'music-cc2ed.appspot.com',
  appId: '1:249455820117:web:a3788890cd55d8c7c8c3dc'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()

const usersCollection = db.collection('users')
const songsCollection = db.collection('songs')

export { auth, db, usersCollection, songsCollection, storage }
