import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from '../pages/Home';
import Doramine from '../pages/Doranime';

function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/doranime/:id' element={<Doramine/>} />
            </Routes>            
        </BrowserRouter>
    )
}


export default RoutesApp;