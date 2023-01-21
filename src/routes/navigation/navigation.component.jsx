import { Fragment ,useContext} from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";

import './navigation.styles.scss';
//  import {} from '../../utils/firebase/firebase.utils';
 import { signOutUser } from "../../utils/firebase/firebase.utils";
 
// import Hom from'routes/home/hom.component';

const Navigation =()=>{
  const {currentUser} =useContext(UserContext);
  const {isCartOpen} =useContext(CartContext);

  // const signOutHandler= async() =>{
    // const signOutUser= async() =>{
      // const res b=await signOutUser();
//  await signOutUser();
//  setCurrentUser(null);
    // console.log(res);
// 
  // } 
    return(
      <Fragment>
            <div className="navigation">
                <Link className="logo-container" to ='/'>
                
                <CrwnLogo className="logo"/>
                {/* <Logo className="logo"/> */}
                </Link>
                <div className="nav-links-container">
                  <Link className="nav-link" to ='home'>
                  Home
                  </Link>
                  <Link className="nav-link" to ='blog'>
                  Blogs
                  </Link>
                  <Link className="nav-link" to ='about'>
                  About
                  </Link>
                   <Link className="nav-link"to='shop' >
                    Shop
                  </Link>
                  
                  { 
                  currentUser ? (
                    <span className=" nav-link" onClick={signOutUser}>
                      SIGN OUT
                    </span>
                    )
                    :( 
                    <Link className="nav-link"to='auth'>
                    SIGN-IN
                  </Link>
                  )
                  }
                  <CartIcon/>
                    
                  
                </div>
               {isCartOpen && <CartDropdown/>}
            </div>
      <Outlet/>
      </Fragment>
    )
  }
  export default Navigation;