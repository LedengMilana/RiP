import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../styles/Profile.css"

export default function MainCompProfile() {
	const navigate = useNavigate()

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
					<p>{localStorage.getItem('current-user')}</p>
					<hr />


					<p onClick={onExit} className='exit-btn'>Выйти</p>
				</div>
				<div className="main-comp-right">
					
				</div>
			</div>
		</>
	)
}
