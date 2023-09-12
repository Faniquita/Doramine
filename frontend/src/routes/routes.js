import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from '../pages/Home';
import Doramine from '../pages/Doranime';
import Header from '../components/Header';
import Error from '../pages/Error'


function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/doranime/:id' element={<Doramine/>} />

                <Route path='*' element={<Error/>} />
            </Routes>            
        </BrowserRouter>
    )
}


export default RoutesApp;