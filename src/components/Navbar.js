import React, { useEffect, useState } from 'react';
import { ReactComponent as NotificationBell } from '../assets/icons/notification-bell.svg';
import { ReactComponent as SearchIcon } from '../assets/icons/search-icon.svg';
import { ReactComponent as Triangle } from '../assets/icons/trinagle-down.svg';
import { ReactComponent as UserIcon } from '../assets/icons/user-icon.svg';
import { ReactComponent as HelpCentre } from '../assets/icons/help-centre.svg';
import '../style/dist/min/navbar.min.css';

const Navbar = () => {
    const [show, handleShow] = useState(false);
    const [profileDropdown, setProfileDropDown] = useState(false);
    const [notificationDropdown, setNotificationDropdown] = useState(false);
    const [searchOpen, setSearchOpen] = useState(true);
    const [dropdownMini, setDropdownMini] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar);

        return () => window.removeEventListener('scroll', transitionNavBar);
    });

    return (
        <nav className={`${show && 'nav-black'}`}>
            <div className='nav-contents'>
                <a href='#'>
                    <img
                        src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
                        alt=''
                        className='nav-logo'
                    />
                </a>

                <ul className='tab-navigation'>
                    <li
                        className='navigation-tab current'
                        onMouseEnter={() => setDropdownMini(true)}
                        onMouseLeave={() => setDropdownMini(false)}
                    >
                        Browse <Triangle className='caroset' />
                        <ul className={`sub-menu ${dropdownMini && 'active'}`}>
                            <li className='sub-menu-list current'>
                                <a href='#' className='menu-trigger'>
                                    Home
                                </a>
                            </li>
                            <li className='sub-menu-list'>
                                <a href='#' className='menu-trigger'>
                                    Series
                                </a>
                            </li>
                            <li className='sub-menu-list'>
                                <a href='#' className='menu-trigger'>
                                    Films
                                </a>
                            </li>
                            <li className='sub-menu-list'>
                                <a href='#' className='menu-trigger'>
                                    Latest
                                </a>
                            </li>
                            <li className='sub-menu-list'>
                                <a href='#' className='menu-trigger'>
                                    My List
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className='navigation-menu current'>
                        <a href='#' className='menu-trigger'>
                            Home
                        </a>
                    </li>
                    <li className='navigation-menu'>
                        <a href='#' className='menu-trigger'>
                            Series
                        </a>
                    </li>
                    <li className='navigation-menu'>
                        <a href='#' className='menu-trigger'>
                            Films
                        </a>
                    </li>
                    <li className='navigation-menu'>
                        <a href='#' className='menu-trigger'>
                            Latest
                        </a>
                    </li>
                    <li className='navigation-menu'>
                        <a href='#' className='menu-trigger'>
                            My List
                        </a>
                    </li>
                </ul>

                <div className='secondary-navigation'>
                    <div className='nav-element'>
                        <button className='search-tab' tabIndex={0} aria-label='Search'>
                            <div className={`search-container ${searchOpen && 'hidden'}`}>
                                <SearchIcon
                                    className='search-icon'
                                    onClick={() => setSearchOpen(!searchOpen)}
                                />

                                <input type='text' placeholder='Titles, people, genres' />
                            </div>
                        </button>
                    </div>

                    <div className='nav-element children-element'>
                        <a href='#'>Children</a>
                    </div>
                    <div className='nav-element dvd-element'>
                        <a href='#'>DVD</a>
                    </div>

                    <button
                        aria-label='Notification'
                        aria-haspopup='true'
                        className='nav-element notification-menu'
                        onMouseEnter={() => setNotificationDropdown(true)}
                        onMouseLeave={() => setNotificationDropdown(false)}
                    >
                        <NotificationBell className='notification-icon' />

                        {notificationDropdown && (
                            <div className='notification-sub-menu'>
                                <ul className='notification-sub-list'>
                                    <li className='notification-sub-item'>
                                        <a href='#' className='notification-link'>
                                            <img
                                                src='https://www.giantmilkcan.com/wp-content/uploads/2020/05/biohackers_cover.jpg'
                                                alt=''
                                            />

                                            <div className='notification-sub-right-side'>
                                                <span className='notification-title'>Biohackers</span>
                                                <span className='notification-added'>3 months ago</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className='notification-sub-item'>
                                        <a href='#' className='notification-link'>
                                            <img
                                                src='https://assets1.ignimgs.com/2021/01/28/lupin-part-2-netflix-release-1611853581811_160w.jpg?width=1280'
                                                alt=''
                                            />

                                            <div className='notification-sub-right-side'>
                                                <span className='notification-title'>
                                                    Rewatch your favorite moments that you watched
                                                </span>
                                                <span className='notification-added'>3 months ago</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className='notification-sub-item'>
                                        <a href='#' className='notification-link'>
                                            <img
                                                src='https://www.looper.com/img/gallery/how-lupin-season-1-just-made-netflix-history/intro-1610490125.jpg'
                                                alt=''
                                            />

                                            <div className='notification-sub-right-side'>
                                                <span className='notification-title'>Biohackers</span>
                                                <span className='notification-added'>3 months ago</span>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </button>

                    <div
                        className='profile-avatar'
                        onMouseEnter={() => setProfileDropDown(true)}
                        onMouseLeave={() => {
                            setProfileDropDown(false);
                        }}
                    >
                        <img
                            src='https://i.pinimg.com/474x/b4/0f/9f/b40f9f8fc0fb88aabf2a8acbc39c0ac0.jpg'
                            alt=''
                            className='nav-avatar'
                        />
                        <Triangle className='nav-avatar-arrow' />

                        {profileDropdown && (
                            <div className='profile-sub-menu'>
                                <ul className='profile-sub-list'>
                                    <li className='profile-sub-item'>
                                        <a href='#' className='profile-sub-link'>
                                            <img
                                                src='https://i.pinimg.com/474x/b4/0f/9f/b40f9f8fc0fb88aabf2a8acbc39c0ac0.jpg'
                                                alt=''
                                            />

                                            <span>ratloni</span>
                                        </a>
                                    </li>
                                    <li className='profile-sub-item'>
                                        <a href='#' className='profile-sub-link'>
                                            <img
                                                src='https://i.pinimg.com/474x/b4/0f/9f/b40f9f8fc0fb88aabf2a8acbc39c0ac0.jpg'
                                                alt=''
                                            />

                                            <span>sky</span>
                                        </a>
                                    </li>
                                </ul>

                                <div className='manage-account'>
                                    <ul className='manage-account-list'>
                                        <li className='account-item'>
                                            <a href='#' className='account-link'>
                                                <UserIcon className='account-icon' />
                                                <span>Account</span>
                                            </a>
                                        </li>
                                        <li className='account-item'>
                                            <a href='#' className='account-link'>
                                                <HelpCentre className='account-icon' style={{ padding: 5 }} />
                                                <span>Help Centre</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className='sign-out-menu'>
                                    <ul className='sign-out-list'>
                                        <div className='sign-out-item'>
                                            <a href='#'>Sign out of Netflix</a>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
