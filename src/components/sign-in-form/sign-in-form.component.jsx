import { async } from "@firebase/util";
import { useState } from "react";
import { createAuthUserWithEmailAndPassword,createUserDocumentFromAuth, signInWithGooglePopup,signInAuthUserWithEmailAndPassword} from "../../utils/firebase/firebase.utils";
import FormInput from '../form-input/form-input.component';
import './sign-in-form.styles.scss'
import Button from "../button/button.component";

const defaultFormFields ={
  
    email:'',
    password:'',
    
}

const SignInForm =()=>{
    const [formFields,setFormFields] =useState(defaultFormFields);
    const {email,password}=formFields;

    console.log(formFields);
    const resetFormFields =()=>{
     setFormFields (defaultFormFields);  
    }
    const signInWithGoogle=async()=>{
        const {user}=await signInWithGooglePopup();
await createUserDocumentFromAuth(user);
    }   ;  
    const handleSubmit =async(event) =>{
        event.preventDefault();
        // if (password !== confirmPassword){
        //     alert('password not match');
        //     return;
        // }
        try{
            const reponse  =await signInAuthUserWithEmailAndPassword(email,password);
            console.log(reponse);
            // await createUserDocumentFromAuth(user,{displayName});
            resetFormFields();
        }
        catch(error){}
        //     if(error.code=='auth/email-already-in-use'){

        //     alert("cannot create user ,email already in use");
        //     }
        //     else{
        //         console.log('user creation error',error); }
   
            

        
    };
    const handleChange =(event)=>{
        const {name,value}=event.target;
        setFormFields({...formFields,[name]:value});
 
    };
    return(
        <div className="sign-up-container">
            <h1>Already have an account</h1>
            <span>sign in with email and password</span>
            <form onSubmit={handleSubmit}>


{/* <FormInput 
label ="Displayname"
type='text' 
required
 onChange ={handleChange}
 name='displayName' 
 value={displayName}
 /> */}

{/* <label>email</label> */}
<FormInput 
label ='Email'
 type ='email'
 required 
 onChange ={handleChange}
 name='email' 
 value={email}
 />
 {/* <label>Password</label> */}
<FormInput 
label ='Password'
type ='password'
required 
onChange ={handleChange}
name='password' 
value={password}/>
{/* <label>confirmPassword</label> */}
{/* 
<FormInput 

label ='ConfirmPassword'
 type ='password'
 required 
 onChange ={handleChange}
 name='confirmPassword'
 
 value={confirmPassword}/> */}
<div className='buttons-container'>
<Button buttonType='google'  type="submit" >sign in</Button>
<Button onClick={signInWithGoogle} buttonType="inverted">Google sign in</Button>
</div>

</form>
            
        </div>
    );
}
export default SignInForm;