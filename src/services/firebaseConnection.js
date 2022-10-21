import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBoXXDNc5CGCDEk7lj8r6xiHwrNpDuAANo",
    authDomain: "tarefas-f7bf3.firebaseapp.com",
    projectId: "tarefas-f7bf3",
    storageBucket: "tarefas-f7bf3.appspot.com",
    messagingSenderId: "813375427031",
    appId: "1:813375427031:web:ff2c9a3c66f239e7c87b92"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export default firebase;