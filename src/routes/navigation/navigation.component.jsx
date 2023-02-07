// // import { Fragment ,useContext} from "react";
// // import { Link, Outlet } from "react-router-dom";
// // import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
// // import CartIcon from '../../components/cart-icon/cart-icon.component';
// // import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
// // import { UserContext } from "../../contexts/user.context";
// // import { CartContext } from "../../contexts/cart.context";

// // import './navigation.styles.scss';
// // //  import {} from '../../utils/firebase/firebase.utils';
// //  import { signOutUser } from "../../utils/firebase/firebase.utils";
 
// // // import Hom from'routes/home/hom.component';

// // const Navigation =()=>{
// //   const {currentUser} =useContext(UserContext);
// //   const {isCartOpen} =useContext(CartContext);

// //   // const signOutHandler= async() =>{
// //     // const signOutUser= async() =>{
// //       // const res b=await signOutUser();
// // //  await signOutUser();
// // //  setCurrentUser(null);
// //     // console.log(res);
// // // 
// //   // } 
// //     return(
// //       <Fragment>
// //             <div className="navigation">
// //                 <Link className="logo-container" to ='/'>
                
// //                 <CrwnLogo className="logo"/>
// //                 {/* <Logo className="logo"/> */}
// //                 </Link>
// //                 <div className="nav-links-container">
// //                   <Link className="nav-link" to ='home'>
// //                   Home
// //                   </Link>
// //                   <Link className="nav-link" to ='blog'>
// //                   Blogs
// //                   </Link>
// //                   <Link className="nav-link" to ='about'>
// //                   About
// //                   </Link>
// //                    <Link className="nav-link"to='shop' >
// //                     Shop
// //                   </Link>
                  
// //                   { 
// //                   currentUser ? (
// //                     <span className=" nav-link" onClick={signOutUser}>
// //                       SIGN OUT
// //                     </span>
// //                     )
// //                     :( 
// //                     <Link className="nav-link"to='/auth'>
// //                     SIGN
// //                   </Link>
// //                   )
// //                   }
// //                   <CartIcon/>
                    
                  
// //                 </div>
// //                {isCartOpen && <CartDropdown/>}
// //             </div>
// //       <Outlet/>
// //       </Fragment>
// //     )
// //   }
// //   export default Navigation;

// import { useSelector } from 'react-redux';
// import { selectCurrentUser } from '../../store/user/user.selector';
// import { Fragment, useContext } from 'react';
// import { Outlet, Link } from 'react-router-dom';

// import { UserContext } from '../../contexts/user.context';
// import { CartContext } from '../../contexts/cart.context';

// import CartIcon from '../../components/cart-icon/cart-icon.component';
// import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
// import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

// import { signOutUser } from '../../utils/firebase/firebase.utils';

// import {Navigationcontainer,NavLink,NavLinks,LogoContainer} from './navigation.styles.jsx';

// const Navigation = () => {
//  const currentUser=useSelector (selectCurrentUser);
//   // const { currentUser } = useContext(UserContext);
//   const { isCartOpen } = useContext(CartContext);

//   return (
//     <Fragment>
//       <Navigationcontainer>

//         <LogoContainer to='/'>
//           <CrwnLogo className='logo' />
//         </LogoContainer>
//                <NavLinks>

//                 <NavLink to='/home'>
//                    HOME
//                   </NavLink>
//                  <NavLink to='/blogs'>
//                    BLOGS
//                    </NavLink>
//                    <NavLink to ='/about'>
//                    ABOUT
//                    </NavLink> 
//           <NavLink to ='/shop'>
//             SHOP
//           </NavLink>

//           {currentUser ? (
//             <NavLink as ="span" onClick={signOutUser}>
//               SIGN OUT
//             </NavLink>
//           ) : (
//             <NavLink to='/auth'>
//               SIGN IN
//             </NavLink >
//           )}
//           <CartIcon />
//         </NavLinks>
//         {isCartOpen && <CartDropdown />}
//       {/* </div> */}
//       </Navigationcontainer>
//       <Outlet />
//     </Fragment>
//   );
// };

// export default Navigation;


// // import { Fragment, useContext } from 'react';
// // import { Outlet, Link } from 'react-router-dom';

// // import CartIcon from '../../components/cart-icon/cart-icon.component';
// // import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

// // import { UserContext } from '../../contexts/user.context';
// // import { CartContext } from '../../contexts/cart.context';

// // import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
// // import { signOutUser } from '../../utils/firebase/firebase.utils';

// // import {
// //   NavigationContainer,
// //   NavLinks,
// //   NavLink,
// //   LogoContainer,
// // } from './navigation.styles';

// // const Navigation = () => {
// //   const { currentUser } = useContext(UserContext);
// //   const { isCartOpen } = useContext(CartContext);

// //   return (
// //     <Fragment>
// //       <NavigationContainer>
// //         <LogoContainer to='/'>
// //           <CrwnLogo className='logo' />
// //         </LogoContainer>
// //         <NavLinks>
// //           <NavLink to='/shop'>SHOP</NavLink>

// //           {currentUser ? (
// //             <NavLink as='span' onClick={signOutUser}>
// //               SIGN OUT
// //             </NavLink>
// //           ) : (
// //             <NavLink to='/auth'>SIGN IN</NavLink>
// //           )}
// //           <CartIcon />
// //         </NavLinks>
// //         {isCartOpen && <CartDropdown />}
// //       </NavigationContainer>
// //       <Outlet />
// //     </Fragment>
// //   );
// // };

// // export default Navigation;


import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { selectCurrentUser } from '../../store/user/user.selector';

// import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import { ReactComponent as Ca } from '../../assets/ca.svg';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from './navigation.styles';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <Fragment>
      <NavigationContainer>
        {/* <LogoContainer to='/'>
          <CrwnLogo className='logo' />
        </LogoContainer> */}
        
        <LogoContainer to='/'>
          <Ca className='logo' /> 
          
         </LogoContainer>
        {/* <lable><h1 >ecommerece</h1></lable> */}
        <NavLinks>
        <NavLink to='/'>
                    HOME
                   </NavLink>
                  <NavLink to='/blogs'>
                    BLOGS
                    </NavLink>
                    <NavLink to ='/about'>
                    ABOUT
                   </NavLink> 
          <NavLink to='/shop'>SHOP</NavLink>

          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
