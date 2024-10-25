import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import img from "../assets/add-comp-arrow.svg"
import "../styles/MainAddComp.css"
import axios from "axios"

export default function MainAddCompNext() {
	const navigate = useNavigate();
  const formData = useSelector(state => state.modal);

  useEffect(() => {
    if (!formData.title) {
      navigate('/add-post');
    }
  }, [formData, navigate]);

	const handleSubmit = async (e) => {
		e.preventDefault();
	
		try {
			const accessToken = localStorage.getItem('access_token');
			const response = await axios.post('http://0.0.0.0:8000/api/v1/execute', formData, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${accessToken}`
				},
			});
			console.log('Успешно отправлено:', response.data);
			navigate('/catalog');
		} catch (error) {
			alert("Объявление не добавлено")
			console.error('Ошибка отправки данных:', error);
		}
	};


  return (
		<>
      <div className="">
        <img src={img} alt="no img" className='img-arrow' onClick={() => navigate(-1)} />
        <div className="add-cont">
					<div className="add-cont-inner dop-cent-align">
						<label htmlFor="kind">Категория</label>
						<p>{formData.kind === 'Dog' ? 'Собака' : 'Кошка'}</p>
					</div>

					<div className="add-cont-inner dop-cent-align">
						<label htmlFor="breed">Порода</label>
						<p>{formData.breed}</p>
					</div>

					<div className="add-cont-inner dop-cent-align">
						<label htmlFor="title">Название товара</label>
						<p>{formData.title}</p>
					</div>
					

					<div className="add-cont-inner dop-cent-align">
						<label htmlFor="price">Цена</label>
						<p>{formData.price} ₽</p>
					</div>
					

					<div className="add-cont-inner dop-cent-align">
						<label htmlFor="description">Описание</label>
						<p>{formData.description}</p>
					</div>
					

					<div className="add-cont-inner dop-cent-align">
						<label htmlFor="age">Возраст</label>
          	<p>{formData.age}</p>
					</div>
					
          
					<div className="add-cont-inner dop-cent-align">
						<label htmlFor="gender">Пол</label>
          	<p>{formData.gender === 'M' ? 'Мужской' : 'Женский'}</p>
					</div>
					

					<div className="add-cont-inner">
						<label htmlFor="image">Ссылка на изображение</label>
						{formData.image && <img className='result-img' src={formData.image} alt="" />}
					</div>
					

					<div className="add-cont-inner dop-cent-align">
						<label htmlFor="image">Местоположение</label>
          	<p>{formData.location}</p>
					</div>
          
					<div className="">
						<button className='btn-for-next' onClick={handleSubmit}>Опубликовать объявление</button>
					</div>
        </div>
      </div>
    </>
  );
}
