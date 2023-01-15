

import { Routes, Route} from 'react-router-dom';
// import Hom from './routes/home/hom.component';
import Home from './routes/home/home.component';
import Blog from './routes/home/blog.component';
import About from './routes/home/about.component';
import Navigation from './routes/navigation/navigation.component';
import Shop from './routes/shop/shop.component';
import SignIn from './routes/sign-in/sign-in.component';



const App =() =>{
  
    return(
     <Routes>
    
        <Route path ='/'element={<Navigation/>}>
        <Route index element={<Home/>}/>
       <Route path ='shop'element={<Shop/>}/>
       <Route path ='sign-in'element={<SignIn/>}/>
       <Route path ='home'element={<Home/>}/>
       <Route path ='about'element={<About/>}/>
       <Route path ='blog'element={<Blog/>}/>
       </Route>
      
       </Routes>
      
    );
      
};


export default App;

