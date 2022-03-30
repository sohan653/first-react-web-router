import logo from './logo.svg';
import './App.css';




import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';

import Login from './components/Login/Login';
import Error from './components/Error/Error';
import Huku from './components/LineChart/LineChart'
import Information from './components/Information/Information';
import LandingPage from './components/LandingPage/LandingPage';
import SingleInfo from './components/SingleInfo/SingleInfo';
import Post from './components/Post/Post';
import Subpost from './components/Subpost/Subpost';


function App() {
  return(
    <div className='App'>
      <h1>Welcome to router</h1>
      <Header></Header>
      <Routes>
       <Route path='/' element={<LandingPage></LandingPage>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
       <Route path='/Huku' element={<Huku></Huku>}></Route>
        <Route path='/information' element={ <Information></Information>}></Route>
        <Route path='/information/:infoId' element={<SingleInfo></SingleInfo>}></Route>
        <Route path='/post' element={<Post></Post>}>
          <Route path=':subpost' element={<Subpost></Subpost>}></Route>
        </Route>
        <Route path='*' element={<Error></Error>}></Route>
      </Routes>
     
    </div>
  )
  
}

export default App;
