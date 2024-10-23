import React, { useState, useEffect } from 'react'
import logo from "../assets/logo.svg"
import "../styles/Header.css"
import { NavLink } from 'react-router-dom'
import SignInModal from './SignInModal';
import imgProfile from "../assets/profile.svg"

export default function Header() {

	const [showModal, setShowModal] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(()=>{
		const currentUser = localStorage.getItem('current-user');
		if (currentUser) {
			setIsLoggedIn(true);
		}
	}, [])

	const handleOpenModal = () => {
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};

	return (
		<>
			<div className="header-cont">
				<NavLink to="/"><img src={logo} alt="no img" className='header-cont-img' /></NavLink>
				<ul className='list-ul'>
					<li><NavLink to="/catalog" className='list-li'>Каталог</NavLink></li>
					<li><NavLink to="/add-post" className='list-li'>Разместить объявление</NavLink></li>
				</ul>
				{isLoggedIn ? (
					<NavLink to="/profile">
						<img src={imgProfile} alt="profile" className='profile-img' />
					</NavLink>
				) : (
					<button className='header-btn-signin' onClick={handleOpenModal}>Войти</button>
				)}
			</div>
			{showModal && <SignInModal onClose={handleCloseModal} />}
		</>
	)
}
