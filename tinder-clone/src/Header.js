import React from 'react';
import "./Header.css";
import Person2Icon from '@mui/icons-material/Person2';
import ForumIcon from '@mui/icons-material/Forum';
import { IconButton } from '@mui/material';
import {Link} from "react-router-dom";

function Header(){
    return (
    <div className='header'>
        <IconButton>
        <Person2Icon fontSize="large" className="header__icon" />
        </IconButton>

        <img
        className="header__logo"
        src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png"
        alt=""
        />
    <Link to ="/chat">
        <IconButton>
            <ForumIcon fontSize="large" className="header__icon" />
        </IconButton>
    </Link>
    </div>
    );
}

export default Header;