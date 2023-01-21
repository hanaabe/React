import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Blogs from './routes/home/blog.component';
import About from './routes/home/about.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        
        <Route path='home' element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='blog' element={<Blogs />} />
        <Route path='about' element={<About />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
