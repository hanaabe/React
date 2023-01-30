import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Blogs from './routes/home/blog.component';
import About from './routes/home/about.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        
        <Route path='home' element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='blogs' element={<Home />} />
        
        <Route path='about' element={<About />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
