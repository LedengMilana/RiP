import React, { useState } from 'react'
import "../styles/Catalog.css"

export default function MainCompCatalog() {
	const [minValue, setMinValue] = useState(1000);
  const [maxValue, setMaxValue] = useState(25000);
	const [selectedOption, setSelectedOption] = useState(false);
	const [selectedOption2, setSelectedOption2] = useState(false);
	const [selectedOption3, setSelectedOption3] = useState(false);
	const [selectedOption4, setSelectedOption4] = useState(false);
	const [selectedOption5, setSelectedOption5] = useState(false);
	const [] = useState([
    {
			"id": 1,
			'title': 'Пупсик2',
			'description': 'Милый пупсик',
			'kind': 'Dog',
			'breed': 'пуп',
			'age': 1,
			'gender': 'M',
			'location': 'Москва',
			'price': 16000,
			'image': 'pups.png'
    },
    {
			"id": 2,
			'title': 'Собака2',
			'description': 'Собака',
			'kind': 'Dog',
			'breed': 'красивая порода',
			'age': 4,
			'gender': 'M',
			'location': 'Томск',
			'price': 100,
			'image': 'cap.jpg'
    },
    {
			"id": 3,
			'title': 'Пуп2',
			'description': 'Милая собака',
			'kind': 'Dog',
			'breed': 'красивая пуп',
			'age': 5,
			'gender': 'F',
			'location': 'Новосибирск',
			'price': 16500,
			'image': 'panda.jpg'
    }
	])

  const handleOptionChange = () => {
    setSelectedOption(!selectedOption);
  };
	const handleOptionChange2 = () => {
    setSelectedOption2(!selectedOption2);
  };
	const handleOptionChange3 = () => {
    setSelectedOption3(!selectedOption3);
  };
	const handleOptionChange4 = () => {
    setSelectedOption4(!selectedOption4);
  };
	const handleOptionChange5 = () => {
    setSelectedOption5(!selectedOption5);
  };

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxValue - 1000);
    setMinValue(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minValue + 1000);
    setMaxValue(value);
  };

  const handleMinInputChange = (e) => {
    const value = Math.min(Number(e.target.value), maxValue - 1000);
    setMinValue(value);
  };

  const handleMaxInputChange = (e) => {
    const value = Math.max(Number(e.target.value), minValue + 1000);
    setMaxValue(value);
  };


	return (
		<>
			<p>Главная &gt; Каталог</p>
			<div className="main-comp">
				<div className="main-comp-filters">
					<h3>Категория</h3>
					<div className="custom-checkbox-group">
						<div>
							<label className="custom-checkbox">
								<input
									type="checkbox"
									checked={selectedOption}
									onChange={handleOptionChange}
								/>
								<span className="checkmark"></span>
								Кошки
							</label>
							<label className="custom-checkbox">
								<input
									type="checkbox"
									checked={selectedOption2}
									onChange={handleOptionChange2}
								/>
								<span className="checkmark"></span>
								Собаки
							</label>
							<label className="custom-checkbox">
								<input
									type="checkbox"
									checked={selectedOption3}
									onChange={handleOptionChange3}
								/>
								<span className="checkmark"></span>
								Птицы
							</label>
						</div>
					</div>
					<h3>Пол</h3>
					<div className="custom-checkbox-group">
						<div>
							<label className="custom-checkbox">
								<input
									type="checkbox"
									checked={selectedOption4}
									onChange={handleOptionChange4}
								/>
								<span className="checkmark"></span>
								Мальчик
							</label>
							<label className="custom-checkbox">
								<input
									type="checkbox"
									checked={selectedOption5}
									onChange={handleOptionChange5}
								/>
								<span className="checkmark"></span>
								Девочка
							</label>
						</div>
					</div>
					<h3>Цена</h3>
					<div className="range-slider">
						<div className="slider-values">
							<span className="slider-value" style={{ left: `${(minValue / 25000) * 100}%` }}>
								{minValue + "₽"}
							</span>
							<span className="slider-value" style={{ left: `${(maxValue / 25000) * 100}%` }}>
								{maxValue + "₽"}
							</span>
						</div>
						<input
							type="range"
							min="1000"
							max="25000"
							value={minValue}
							onChange={handleMinChange}
							className="thumb thumb--left"
						/>
						<input
							type="range"
							min="1000"
							max="25000"
							value={maxValue}
							onChange={handleMaxChange}
							className="thumb thumb--right"
						/>
						<div className="slider">
							<div className="slider__track"></div>
							<div
								className="slider__range"
								style={{ left: `${(minValue / 25000) * 100}%`, right: `${100 - (maxValue / 25000) * 100}%` }}
							></div>
						</div>
						<div className="input-container">
							<input
								type="number"
								value={minValue}
								onChange={handleMinInputChange}
								className="input-box"
								min="1000"
								max="25000"
							/>
							<span>–</span>
							<input
								type="number"
								value={maxValue}
								onChange={handleMaxInputChange}
								className="input-box"
								min="1000"
								max="25000"
							/>
						</div>
					</div>
					<button className='header-btn-signin btn-clean'>Очистить фильтр</button>
				</div>
				<div className="main-comp-right">
					
				</div>
			</div>
		</>
	)
}
