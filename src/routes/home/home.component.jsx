import { Outlet } from 'react-router-dom';

import Directory from '../../components/directory/directory.component';
// import Footer from '../../routes/home/footer.component'

const Home = () => {


  return (
    <div>
      <Directory  />
     
      <Outlet />
    </div>
  );
};

export default Home;
