import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
// import { ReactComponent as Logo } from "../../assets/logo.svg";

import './navigation.styles.scss';
// import Hom from'routes/home/hom.component';

const Navigation =()=>{
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
                  <Link className="nav-link"to='auth'>
                    Sign-In
                  </Link>
                </div>
            </div>
      <Outlet/>
      </Fragment>
    )
  }
  export default Navigation;