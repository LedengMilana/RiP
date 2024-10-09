import React from 'react'
import imgOfDog from "../assets/dog.png"
import img1 from "../assets/animal1.png"
import img2 from "../assets/animal2.png"
import img3 from "../assets/animal3.png"
import "../styles/MainPageComp.css"
import { NavLink } from 'react-router-dom'

export default function MainPageComp() {
	return (
		<>
			<div className="first-block">
				<div className="">
					<h2>LAIKA</h2>
					<p>Здесь вы можете найти питомца своей мечты или разместить объявление о продаже.</p>
				</div>
				<img className='img-second-block' src={imgOfDog} alt="" />
			</div>
			<div className="third-block">
				<h2>Категории животных</h2>
				<p>Найдите питомца по душе!</p>
				<p>У нас есть собаки, кошки и птицы.<br/> Выберите друга или разместите своё объявление.</p>
			</div>
			<div className="fourth-block">
				<button className="fourth-block-btn">
					<NavLink to="/catalog" className="fourth-block-a">
						<img src={img1} alt="" />
						<p>КОШКИ</p>
					</NavLink>
				</button>
				<button className="fourth-block-btn">
					<NavLink to="/catalog" className="fourth-block-a">
						<img src={img2} alt="" />
						<p>СОБАКИ</p>
					</NavLink>
				</button>
				<button className="fourth-block-btn">
					<NavLink to="/catalog" className="fourth-block-a">
						<img src={img3} alt="" />
						<p>ПТИЦЫ</p>
					</NavLink>
				</button>
			</div>
			<div className="fifth-block">
				<NavLink to="/add-post" className="fourth-block-a"><button className='btn-for-add'>Разместить объявление</button></NavLink>
			</div>

		</>
	)
}
