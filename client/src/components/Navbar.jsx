import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import Logo from "../img/logo.png";
import Home from '../pages/Home';

const Navbar = () => {

    const {currentUser, logout} = useContext(AuthContext);

  return (
    <div className='navbar'>
        <div className="container">
            <div className="logo">
                <Link to="/" >
                    <img src={Logo} alt="" />
                </Link>
            </div>
            <div className="links">
                <Link className='link' to="/?cat=aLaUne">
                <h6>A LA UNE</h6>
                </Link>
                <Link className='link' to="/?cat=focus">
                <h6>FOCUS</h6>
                </Link>
                <Link className='link' to="/?cat=articles">
                <h6>ARTICLES</h6>
                </Link>
                <Link className='link' to="/?cat=news">
                <h6>NEWS</h6>
                </Link>
                <span>{currentUser?.username}</span>
                {currentUser ? (
                    <span onClick={logout} >Se déconnecter</span>
                    ) : (
                    <Link className="link" to="/login">
                        Se connecter
                    </Link>
                )}
                <span className="write">
                    <Link className="link" to="/write">Ecrire</Link>
                </span>

            </div>
        </div>
    </div>
  )
}

export default Navbar