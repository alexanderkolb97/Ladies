import {Context} from './App';
import {useContext} from 'react';
import {Link} from "react-router-dom";
import Logo from './images/logo.png'
import Cart from './images/cart.png'

function Header() {
    const {setSearchstatus, cartNumber} = useContext(Context);

    const searchProducts = function (e) {
      if (e.target.value.length < 3) {
        setSearchstatus('');

        return null;
      }

      setSearchstatus(e.target.value);
    };

    return (
        <header className="header">
            <div className="logo">
                <a href="/"><img src={Logo} alt="logo"/></a>
            </div>
            <div className="search_wrapper">
                <input onChange={searchProducts} type="text" name="search" placeholder="Search" />
                <span className="search_icon"></span>
            </div>
            <Link to="/cart" className="cart">
                <span className="cart_amount">{cartNumber}</span>
                <img src={Cart} alt="cart"/>
            </Link>
        </header>
    )
}

export default Header;