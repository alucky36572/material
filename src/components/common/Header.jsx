import React, { useState } from 'react'
import { Link } from "react-router-dom";
import logo from '../data/logo.png';
import { navlink } from '../data/dummydata';
import { Menu } from '@mui/icons-material';

export const Header = () => {
    const [responsive, setResponsive] = useState(false);

    return (
        <>
            <header>
                <div className='container flexsb'>
                    <div className='logo'>
                        <img src={logo} alt='logo' data-aos='zoom-in-right'></img>
                    </div>
                    <div className={responsive ? 'hideMenu' : 'nav'}>
                        {navlink.map((links, i) => (
                            <Link to={links.url} key={i} data-aos='zoom-in-left'>
                                {links.text}
                            </Link>
                        ))}
                    </div>
                    <button className='toggle' onClick={() => setResponsive(!responsive)}>
                        <Menu className='icon'></Menu>
                    </button>


                </div>

            </header>
        </>
    )
}
