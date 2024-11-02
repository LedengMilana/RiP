import React, { useEffect } from 'react'
import { useNavigate, useLocation, Link, Outlet } from 'react-router-dom'
import "../styles/Profile.modules.css"

export default function MainCompProfile() {
	const navigate = useNavigate()
	const location = useLocation();

	useEffect(() => {
		if (location.pathname === "/profile") {
			navigate("/profile/first")
		}
	}, []);

	const onExit = () => {
		localStorage.removeItem("current-user")
		localStorage.removeItem("access_token")
		localStorage.removeItem("refresh_token")
		navigate("/")
	}

	return (
		<>
			<p>Главная &gt; Личный кабинет</p>
			<div className="main-comp">
				<div className="main-comp-filters">
					<p className='name'>{localStorage.getItem('current-user')}</p>
					<hr />
					<ol className='ol-links'>
						<li><Link to="first" className={location.pathname === "/profile/first" ? "links orange" : "links"}>Профиль</Link></li>
						<li><Link to="chat" className={location.pathname === "/profile/chat" ? "links orange" : "links"}>Чат с тех.поддержкой</Link></li>
						<li><Link to="chat-admin" className={location.pathname === "/profile/chat-admin" ? "links orange" : "links"}>Администрирование</Link></li>
					</ol>
					<p onClick={onExit} className='exit-btn'>Выйти</p>
				</div>
				<div className="main-comp-right">
					<Outlet />
				</div>
			</div>
		</>
	)
}
