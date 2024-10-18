import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFormData } from './modalSlice';
import img from "../assets/add-comp-arrow.svg";
import { useNavigate } from 'react-router-dom';
import "../styles/MainAddComp.css";

export default function MainAddComp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const reduxFormData = useSelector((state) => state.modal);

  const [formData, setFormDataLocal] = useState({
    title: reduxFormData.title || '',
    description: reduxFormData.description || '',
    kind: reduxFormData.kind || 'Dog',
    breed: reduxFormData.breed || '',
    age: reduxFormData.age || '',
    gender: reduxFormData.gender || 'M',
    location: reduxFormData.location || '',
    price: reduxFormData.price || '',
    image: reduxFormData.image || '',
  });

  useEffect(() => {
    setFormDataLocal({
      title: reduxFormData.title || '',
      description: reduxFormData.description || '',
      kind: reduxFormData.kind || 'Dog',
      breed: reduxFormData.breed || '',
      age: reduxFormData.age || '',
      gender: reduxFormData.gender || 'M',
      location: reduxFormData.location || '',
      price: reduxFormData.price || '',
      image: reduxFormData.image || '',
    });
  }, [reduxFormData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDataLocal((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalData = {
      ...formData,
      price: Number(formData.price),
      age: Number(formData.age),
    };
    dispatch(setFormData(finalData));
    navigate('/add-post/check');
  };

  return (
    <>
      <div>
        <img src={img} alt="no img" className="img-arrow" onClick={() => navigate(-1)} />
        <div className="add-cont">
					<div className="add-cont-inner">
						<label htmlFor="kind">Категория<span className='span-color'>*</span></label>
						<select id='kind' className='inp-for-common inp-sel' name="kind" value={formData.kind} onChange={handleChange}>
							<option value="Dog">Собака</option>
							<option value="Cat">Кошка</option>
						</select>
					</div>

					<div className="add-cont-inner">
						<label htmlFor="breed">Порода<span className='span-color'>*</span></label>
						<input type="text" className='inp-for-common' name="breed" id='breed' value={formData.breed} onChange={handleChange} />
					</div>

					<div className="add-cont-inner">
						<label htmlFor="title">Название товара<span className='span-color'>*</span></label>
						<div className="add-cont-inner-title inp-long">
							<input type="text" className='inp-for-common inp-title' name="title" id='title' maxLength={50} value={formData.title} onChange={handleChange} />
							<p className='add-cont-inner-title-p'>Название не должно превышать 50 символов</p>
						</div>
					</div>
					

					<div className="add-cont-inner">
						<label htmlFor="price">Цена<span className='span-color'>*</span></label>
						<div className="add-cont-inner-price">
							<input type="number" className='inp-for-common inp-price' name="price" id='price' value={formData.price} onChange={handleChange} />
							<span>₽</span>
						</div>
					</div>
					

					<div className="add-cont-inner">
						<label htmlFor="description">Описание</label>
						<div className="inp-long">
							<textarea name="description" id='description' className='inp-for-common inp-textarea inp-title' maxLength={3000} value={formData.description} onChange={handleChange} ></textarea>
							<div className="div-textarea-ps">
								<p>До 3000 символов</p>
								<p>{formData.description.length}/3000</p>
							</div>
						</div>
          	
					</div>
					

					<div className="add-cont-inner">
						<label htmlFor="age">Возраст<span className='span-color'>*</span></label>
          	<input type="number" className='inp-for-common' name="age" id='age' value={formData.age} onChange={handleChange} />
					</div>
					
          
					<div className="add-cont-inner">
						<label htmlFor="gender">Пол<span className='span-color'>*</span></label>
          	<select name="gender" className='inp-for-common inp-sel' id='gender' value={formData.gender} onChange={handleChange}>
          	  <option value="M">Мужской</option>
          	  <option value="F">Женский</option>
          	</select>
					</div>
					

					<div className="add-cont-inner">
						<label htmlFor="image">Ссылка на изображение</label>
          	<input type="text" className='inp-for-common inp-long' name="image" id='image' value={formData.image} onChange={handleChange} />
					</div>
					

					<div className="add-cont-inner">
						<label htmlFor="image">Местоположение</label>
          	<input type="text" className='inp-for-common inp-search inp-long' name="location" value={formData.location} onChange={handleChange} placeholder="Введите адрес" />
					</div>
					

					<div>
						<button className='btn-for-next' onClick={handleSubmit}>Далее</button>
					</div>
        </div>
      </div>
    </>
  );
}
