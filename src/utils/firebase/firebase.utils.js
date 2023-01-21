import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import {initializeApp } from 'firebase/app'
// import { Form } from 'react-router-dom';
import{
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    
    
}from 'firebase/auth';

import{
    getFirestore,
    doc,
    getDoc,
    setDoc,
}from 'firebase/firestore';
import { useCallback } from 'react';



const firebaseConfig = {
    apiKey: "AIzaSyC8luxeHRwfkH4aL2IuPP8sBoUngRsWCJ0",
    authDomain: "mydb-82676.firebaseapp.com",
    projectId: "mydb-82676",
    storageBucket: "mydb-82676.appspot.com",
    messagingSenderId: "74886871496",
    appId: "1:74886871496:web:00aa0ed2b9126bce4d28fd",
    measurementId: "G-5MMTKDWR1P"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // const firebase = initializeApp(firebaseConfig);
  const googleProvider =new GoogleAuthProvider();
  googleProvider.setCustomParameters({
    prompt:"select_account"
  });
  // export default firebase;

  export const auth=getAuth();
  export const signInWithGooglePopup =() =>signInWithPopup(auth,googleProvider);
  export const signInWithGoogleRedirect=()=> signInWithRedirect(auth,googleProvider);
  export const db =getFirestore();
  export const createUserDocumentFromAuth =async(
    userAuth,
    addtionalInformation ={displayName: 'hh'} 
    ) =>{
    if (!userAuth)return ;
    const userDocRef= doc(db,'users',userAuth.uid);
    console.log(userDocRef);
    const userSnapshot =await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());
    if(!userSnapshot.exists()){
      const {displayName,email}=userAuth;
      const createdAt =new Date();
      try{
await  setDoc(userDocRef,{
  displayName,
  email,
  createdAt,
  ...addtionalInformation,
}
  );
}  
      catch (error){
console.log("error creating the user",error.message);
      }
    } 
    return userDocRef;
    }; 
export const createAuthUserWithEmailAndPassword =async(email,password)=>{
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth,email,password);

}; 
export const signInAuthUserWithEmailAndPassword =async(email,password)=>{
  if(!email || !password) return;
  return await signInWithEmailAndPassword(auth,email,password);
}; 
export const signOutUser =async() =>await signOut(auth) ;

export const onAuthStateChangedListener=(callback) => onAuthStateChanged(auth,callback);