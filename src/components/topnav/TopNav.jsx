import React from 'react'

import './topnav.css'

import { Link } from 'react-router-dom'

import Dropdown from '../dropdown/Dropdown'

import ThemeMenu from '../thememenu/ThemeMenu'

import notifications from '../../assets/JsonData/notification.json'

import user_image from '../../assets/images/sameedz.jpg'

import user_menu from '../../assets/JsonData/user_menus.json'

import axios from 'axios'

const curr_user = {
    display_name: localStorage.getItem('User'),
    image: user_image
}

const renderNotificationItem = (item, index) => (
    localStorage.getItem('LoginStatus') && (<div className="notification-item" key={index}>
        <i className={item.icon}></i>
        <span>{item.content}</span>
    </div>)
)

const renderUserToggle = (user) => (
    localStorage.getItem('LoginStatus') && (<div className="topnav__right-user">
        <div className="topnav__right-user__image">
            <img src={user.image} alt="" />
        </div>
        <div className="topnav__right-user__name">
            {user.display_name}
        </div>
    </div>)
)
const ValidateLogout = async ()=>{
            
    var response = await axios.post('http://localhost:3001/logout');
        if(response.status==200)
        {
               localStorage.removeItem('LoginStatus');
               localStorage.removeItem('User');
               localStorage.removeItem('Access');
               window.location.href = 'http://localhost:3000/login';
        }
        else
        {
            console.log(response);
        }
}
const renderUserMenu =(item, index) => (
    item.content=='Logout' && (<Link onClick={ValidateLogout} key={index}>
        <div className="notification-item">
            <i className={item.icon}></i>
            <span>{item.content}</span>
        </div>
    </Link>)
)

const Topnav = () => {
    return (
        <div className='topnav'>
            <div className="topnav__search">
                <input type="text" placeholder='Search here...' />
                <i className='bx bx-search'></i>
            </div>
            <div className="topnav__right">
                {
                localStorage.getItem('LoginStatus') && (<div className="topnav__right-item">
                    {/* dropdown here */}
                    <Dropdown
                        customToggle={() => renderUserToggle(curr_user)}
                        contentData={user_menu}
                        renderItems={(item, index) => renderUserMenu(item, index)}
                    />
                </div>)}
                {localStorage.getItem('LoginStatus') && (<div className="topnav__right-item">
                    <Dropdown
                        icon='bx bx-bell'
                        badge='12'
                        contentData={notifications}
                        renderItems={(item, index) => renderNotificationItem(item, index)}
                        renderFooter={() => <Link to='/'>View All</Link>}
                    />
                    {/* dropdown here */}
                </div>)
                }
                {
                !localStorage.getItem('LoginStatus') && <div>
                        <Link to="/login">
                            Login
                        </Link>
                    </div>
                }
                <div className="topnav__right-item">
                    <ThemeMenu/>
                </div>
            </div>
        </div>
    )
}

export default Topnav
