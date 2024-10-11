import React, { useEffect, useState } from 'react'
import "../styles/Catalog.css"
import img1 from "../assets/catalog-cat1.png"
import img2 from "../assets/catalog-cat2.png"
import img3 from "../assets/catalog-cat3.png"
import axios from 'axios'

export default function MainCompCatalog() {
	const [minValue, setMinValue] = useState(100);
  const [maxValue, setMaxValue] = useState(25000);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedGender, setSelectedGender] = useState([]);
	const [animals, setAnimals] = useState([
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
			'image': img1
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
			'image': img2
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
			'image': img3
    },
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
			'image': img1
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
			'image': img2
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
			'image': img3
    },
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
			'image': img1
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
			'image': img2
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
			'image': img3
    }
	])
	const [arrOfImg, setArrOfImg] = useState([img1, img2, img3, img1, img2, img3, img1, img2, img3])
	const [filteredAnimals, setFilteredAnimals] = useState(animals);

	useEffect(()=>{
		axios.get('http://0.0.0.0:8000/api/v1/execute')
      .then(response => {
        setFilteredAnimals(response.data);
      })
      .catch(error => {
        console.error(error);
      });
	}, [])

  const handleCategoryChange = (category) => {
    const updatedCategories = selectedCategory.includes(category)
      ? selectedCategory.filter(c => c !== category)
      : [...selectedCategory, category];
    setSelectedCategory(updatedCategories);
    applyFilters(updatedCategories, selectedGender, minValue, maxValue, searchTerm);
  };

  const handleGenderChange = (gender) => {
    const updatedGender = selectedGender.includes(gender)
      ? selectedGender.filter(g => g !== gender)
      : [...selectedGender, gender];
    setSelectedGender(updatedGender);
    applyFilters(selectedCategory, updatedGender, minValue, maxValue, searchTerm);
  };

  const handlePriceChange = (min, max) => {
    setMinValue(min);
    setMaxValue(max);
    applyFilters(selectedCategory, selectedGender, min, max, searchTerm);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    applyFilters(selectedCategory, selectedGender, minValue, maxValue, e.target.value);
  };

  const applyFilters = (categories, genders, min, max, search) => {
    let filtered = animals;

    if (categories.length > 0) {
      filtered = filtered.filter(animal => categories.includes(animal.kind));
    }
    if (genders.length > 0) {
      filtered = filtered.filter(animal => genders.includes(animal.gender));
    }
    filtered = filtered.filter(animal => animal.price >= min && animal.price <= max);
    if (search) {
      filtered = filtered.filter(animal => animal.description.toLowerCase().includes(search.toLowerCase()));
    }

    setFilteredAnimals(filtered);
  };

  const clearFilters = () => {
    setSelectedCategory([]);
    setSelectedGender([]);
    setMinValue(100);
    setMaxValue(25000);
    setSearchTerm('');
    setFilteredAnimals(animals);
  };

  // const handleOptionChange = () => {
  //   setSelectedOption(!selectedOption);
  // };
	// const handleOptionChange2 = () => {
  //   setSelectedOption2(!selectedOption2);
  // };
	// const handleOptionChange3 = () => {
  //   setSelectedOption3(!selectedOption3);
  // };
	// const handleOptionChange4 = () => {
  //   setSelectedOption4(!selectedOption4);
  // };
	// const handleOptionChange5 = () => {
  //   setSelectedOption5(!selectedOption5);
  // };

  // const handleMinChange = (e) => {
  //   const value = Math.min(Number(e.target.value), maxValue - 10);
  //   setMinValue(value);
  // };

  // const handleMaxChange = (e) => {
  //   const value = Math.max(Number(e.target.value), minValue + 10);
  //   setMaxValue(value);
  // };

  // const handleMinInputChange = (e) => {
  //   const value = Math.min(Number(e.target.value), maxValue - 10);
  //   setMinValue(value);
  // };

  // const handleMaxInputChange = (e) => {
  //   const value = Math.max(Number(e.target.value), minValue + 0);
  //   setMaxValue(value);
  // };


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
									checked={selectedCategory.includes('Cat')}
									onChange={() => handleCategoryChange('Cat')}
								/>
								<span className="checkmark"></span>
								Кошки
							</label>
							<label className="custom-checkbox">
								<input
									type="checkbox"
									checked={selectedCategory.includes('Dog')}
									onChange={() => handleCategoryChange('Dog')}
								/>
								<span className="checkmark"></span>
								Собаки
							</label>
							<label className="custom-checkbox">
								<input
									type="checkbox"
									checked={selectedCategory.includes('Bird')}
									onChange={() => handleCategoryChange('Bird')}
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
									checked={selectedGender.includes('M')}
									onChange={() => handleGenderChange('M')}
								/>
								<span className="checkmark"></span>
								Мальчик
							</label>
							<label className="custom-checkbox">
							<input
                type="checkbox"
                checked={selectedGender.includes('F')}
                onChange={() => handleGenderChange('F')}
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
							min="0"
							max="25000"
							value={minValue}
							onChange={(e) => handlePriceChange(e.target.value, maxValue)}
							className="thumb thumb--left"
						/>
						<input
							type="range"
							min="0"
							max="25000"
							value={maxValue}
							onChange={(e) => handlePriceChange(minValue, e.target.value)}
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
								onChange={(e) => handlePriceChange(e.target.value, maxValue)}
								className="input-box"
								min="0"
								max="25000"
							/>
							<span>–</span>
							<input
								type="number"
								value={maxValue}
								onChange={(e) => handlePriceChange(minValue, e.target.value)}
								className="input-box"
								min="0"
								max="25000"
							/>
						</div>
					</div>
					<button className='header-btn-signin btn-clean' onClick={clearFilters}>Очистить фильтр</button>
				</div>
				<div className="main-comp-right">
					<div className="main-comp-right-top">
						<p>Найдено {filteredAnimals.length} объявлений</p>
						<input
              type="text"
              className='main-comp-right-top-inp'
              placeholder='Поиск'
              value={searchTerm}
              onChange={handleSearch}
            />
					</div>
					<div className="main-comp-right-bottom">
						{
							filteredAnimals.map((item,index)=>(
								<div className="main-comp-right-bottom-item" key={index}>
									<img src={arrOfImg[index]} alt="" />
									<p className="main-comp-right-bottom-item-p1">{item.price} ₽</p>
									<p className="main-comp-right-bottom-item-p2">{item.description}</p>
								</div>
							))
						}
					</div>
				</div>
			</div>
		</>
	)
}
