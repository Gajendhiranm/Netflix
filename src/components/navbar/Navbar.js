import { Search,Notifications, ArrowDropDown } from '@material-ui/icons';
import React, { useState } from 'react'
import "./navbar.css";

const Navbar = () => {
    const [isScroll,setIsScroll] = useState(false);
    

    window.onscroll = () => {
        setIsScroll(window.pageYOffset === 0 ? false:true);
        return () => window.onscroll = null;
    }
    console.log(isScroll)



    return (
        <div className={isScroll ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"/>
                    <span>HomePage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and popular</span>
                    <span>MyList</span>
                </div>
                
                <div className="right">
                    <Search/>
                    <span>KID</span>
                    <Notifications className="icon"/>
                    <img src="https://gajendhiranm.github.io/assets/images/last.webp"/>
                    <div class="profile">
                       <ArrowDropDown className="icon"/>
                            <div className="options"> 
                                <span>Settings</span>
                                <span>Logout</span>    
                            </div>
                    </div>
                </div>
             
            </div>
        </div>
    )
}

export default Navbar