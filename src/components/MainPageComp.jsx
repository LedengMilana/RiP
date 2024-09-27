import React from 'react'
import imgOfDog from "../assets/dog.png"
import img1 from "../assets/animal1.png"
import img2 from "../assets/animal2.png"
import img3 from "../assets/animal3.png"
import "../styles/MainPageComp.css"

export default function MainPageComp() {
	return (
		<>
			<div className="first-block">
				<h2>LAIKA</h2>
				<p>Добро пожаловать на доску объявлений для покупки домашних животных!</p>
			</div>
			<div className="second-block">
				<div className="second-block-left">
					<p className='second-block-left-p1'>Здесь вы можете найти питомца своей мечты или разместить объявление о продаже.</p>
					<p className='second-block-left-p2'>Легко, <br />
						Быстро, <br />
						С заботой о каждом питомце</p>
				</div>
				<img className='img-second-block' src={imgOfDog} alt="" />
			</div>
			<div className="third-block">
				<h2>Категории животных</h2>
				<p>Найдите питомца по душе!</p>
				<p>У нас есть собаки, кошки и птицы на любой вкус. Выберите друга или разместите своё объявление.</p>
			</div>
			<div className="fourth-block">
				<button>
					<img src={img1} alt="" />
					<p>КОШКИ</p>
				</button>
				<button>
					<img src={img2} alt="" />
					<p>СОБАКИ</p>
				</button>
				<button>
					<img src={img3} alt="" />
					<p>ПТИЦЫ</p>
				</button>
			</div>
			<div className="fifth-block">
				<button className='btn-for-add'>Разместить объявление</button>
			</div>

		</>
	)
}
