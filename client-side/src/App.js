import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import VendorSigninPage from './components/landingPages/VendorSigninPage'
import VendorSignupPage from './components/landingPages/VendorSignupPage';
import './styles/app.css';
import UserSigninPage from './components/landingPages/UserSinginPage';
import UserSignupPage from './components/landingPages/UserSignupPage';
import ProposalsPage from './components/vendorComponents/ProposalsPage';
import CreateEvent from './components/vendorComponents/CreateEvent';
import OpenImages from './components/vendorComponents/OpenImages';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './components/userComponents/LandingPage';
import OpenEvent from './components/userComponents/OpenEvent';


const App = () => {
  return (
    <div className='app-div'>
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<VendorSigninPage/>}/>  
        <Route path='/vendor/signup' element={<VendorSignupPage/>}/>
        <Route path='/vendor/proposalspage' element={<ProposalsPage/>} />
        <Route path='/user/signin' element={<UserSigninPage/>}/>  
        <Route path='/user/signup' element={<UserSignupPage/>}/> 
        <Route path='/vendor/createevent'  element={<CreateEvent/>}/>
        <Route path='/vendor/addimages' element={<OpenImages/>} />

        <Route path='/user/landingpage' element={<LandingPage/>}/>
        <Route path='/user/openevent/:id/:vendorEmail' element={<OpenEvent/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App