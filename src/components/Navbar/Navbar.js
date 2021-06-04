import React from 'react';
import logo from '../../assets/images/gfg.png';
import NavbarItems from './NavbarItems';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const github = 'https://github.com/GeeksForGeeks-BIT-Sindri';
const instagram = 'https://instagram.com/gfg.hnccbits?utm_medium=copy_link';

function Navbar() {
	return (
		<div
			style={{
				backgroundColor: '#f9fafb',
				top: 0,
				position: 'sticky',
				paddingTop: '1rem',
				zIndex: '10',
			}}
		>
			<div className='navbar'>
				<div className='navbar-logo'>
					<Link to='/'>
						<img src={logo} alt='GfG' />
					</Link>
				</div>
				<div className='navbar-items-container'>
					<NavbarItems link='/' className='head-item'>
						Home
					</NavbarItems>
					<NavbarItems link='/about'>About</NavbarItems>
					<NavbarItems link='/teams'>Team</NavbarItems>
					<NavbarItems link={github}>
						<FaGithub size={18} />
					</NavbarItems>
					<NavbarItems link={instagram}>
						<FaInstagram size={18} />
					</NavbarItems>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
