import React from 'react'
import logo from "../assets/logo.svg"
import "../styles/Header.css"

export default function Header() {
	return (
		<>
			<div className="header-cont">
				<img src={logo} alt="no img" />
				<ul className='list-ul'>
					<li><a href="" className='list-li'>Главная</a></li>
					<li><a href="" className='list-li'>Категории</a></li>
					<li><a href="" className='list-li'>Разместить объявление</a></li>
				</ul>
				<button className='header-btn-signin'>Войти</button>
			</div>
		</>
	)
}
