import React from 'react'
import logo from "../assets/logo.svg"
import "../styles/Header.css"
import { NavLink } from 'react-router-dom'

export default function Header() {
	return (
		<>
			<div className="header-cont">
				<NavLink to="/"><img src={logo} alt="no img" className='header-cont-img' /></NavLink>
				<ul className='list-ul'>
					<li><NavLink to="/catalog" className='list-li'>Каталог</NavLink></li>
					<li><NavLink to="/add-post" className='list-li'>Разместить объявление</NavLink></li>
				</ul>
				<button className='header-btn-signin'>Войти</button>
			</div>
		</>
	)
}
