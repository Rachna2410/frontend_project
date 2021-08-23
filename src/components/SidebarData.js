import React from "react";

import * as RiIcons from "react-icons/ri";
import adduser from '../adduser.png';
import users from '../users.png';
import weather from '../weather.png';
import Logo from '../Logo.png';

export const SidebarData = [
{
	title:<img src={Logo} alt="Logo" />
},
{
	title: "Add User",
	path: "/adduser",
	icon: <img src={adduser} alt="adduser" />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

},
{
	title: "Users",
	path: "/users",
	icon: <img src={users} alt="users" />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,
},
{
	title: "Weather",
	path: "/weather",
	icon: <img src={weather} alt="weather" />,
},
];
