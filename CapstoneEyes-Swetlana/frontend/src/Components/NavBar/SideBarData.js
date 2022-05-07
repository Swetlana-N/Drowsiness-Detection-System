import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Run the system',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Software Features',
        path: '/portfolio',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'About us',
        path: '/aboutus',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },

    {
        title: 'Contact Us',
        path: '/contact',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
]