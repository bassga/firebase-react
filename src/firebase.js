// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC_erVpF10wKWPt0z6OI4jr1otvwjE440k',
  authDomain: 'react-auth-df71b.firebaseapp.com',
  projectId: 'react-auth-df71b',
  storageBucket: 'react-auth-df71b.appspot.com',
  messagingSenderId: '393108248162',
  appId: '1:393108248162:web:1714266d9a2ed8e9cce33b',
  measurementId: 'G-CT8SQ72QN4',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
