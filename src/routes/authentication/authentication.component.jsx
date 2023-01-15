// import { async } from "firebase/util";
// import React from "react";
// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import {
   signInWithGooglePopup ,
   createUserDocumentFromAuth,
  //  signInWithGoogleRedirect,
  //  auth,
  } from "../../utils/firebase/firebase.utils"
import { async } from "@firebase/util";
// 
const Authentication = ()=> {
 
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef  = await createUserDocumentFromAuth(user);
        // console.log(user);
      };
      // const logGoogleRedirectUser = async() =>{
      //   const {user} =await signInWithGooglePopup();
      //   console.log(user);
      // };
return( 
 <div>
    <h1>This is sign in page</h1>
  <SignInForm/>
    < SignUpForm/>
  </div>
    );
};
export default Authentication;