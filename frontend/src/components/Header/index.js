import './style.css';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header>
            <Link className="logo" to="/">Doramine Flinx</Link>
            <Link className="fovoritos" to="/favoritos">Favoritos</Link>
        </header>
    )
}


export default Header;