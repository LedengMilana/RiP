import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/Modal.css';
import { useNavigate } from 'react-router-dom';

const signInSchema = Yup.object().shape({
	email: Yup.string().email('Неверный формат почты').required('Поле обязательно'),
	password: Yup.string().min(6, 'Минимум 6 символов').required('Поле обязательно'),
});

const signUpSchema = Yup.object().shape({
	name: Yup.string().required('Поле обязательно'),
	email: Yup.string().email('Неверный формат почты').required('Поле обязательно'),
	password: Yup.string().min(6, 'Минимум 6 символов').required('Поле обязательно'),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref('password')], 'Пароли должны совпадать')
		.required('Поле обязательно'),
});

export default function SignInModal({ onClose }) {
	const [isSignUp, setIsSignUp] = useState(false);
	const [signInError, setSignInError] = useState('');
	const navigate = useNavigate();

	const handleOverlayClick = (e) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	// Функция регистрации
	const handleSignUp = (values) => {
		const users = JSON.parse(localStorage.getItem('users')) || [];
		const userExists = users.some(user => user.email === values.email);

		if (userExists) {
			alert('Пользователь с таким email уже существует');
		} else {
			users.push({ name: values.name, email: values.email, password: values.password });
			localStorage.setItem('users', JSON.stringify(users));
			alert('Пользователь зарегистрирован');
			setIsSignUp(false);
		}
	};

	// Функция входа
	const handleSignIn = (values) => {
		const users = JSON.parse(localStorage.getItem('users')) || [];
		const user = users.find(user => user.email === values.email && user.password === values.password);

		if (user) {
			localStorage.setItem('current-user', values.email)
			navigate('/profile');
		} else {
			setSignInError('Неверный логин или пароль');
		}
	};

	return (
		<div className="modal-overlay" onClick={handleOverlayClick}>
			<div className="modal">
				{isSignUp ? (
					<Formik
						initialValues={{ name: '', email: '', password: '', confirmPassword: '' }}
						validationSchema={signUpSchema}
						onSubmit={handleSignUp}
					>
						{() => (
							<Form className='modal-signin'>
								<h2>Регистрация</h2>
								<p onClick={() => setIsSignUp(false)}>Уже есть аккаунт?</p>
								<div className="modal-signin-for-inps-dop">
									<div className='modal-signin-for-inps'>
										<Field type="text" name="name" placeholder="Имя" className="input-modal" />
										<ErrorMessage name="name" component="div" className="error" />
									</div>
									<div className='modal-signin-for-inps'>
										<Field type="email" name="email" placeholder="Эл. почта" className="input-modal" />
										<ErrorMessage name="email" component="div" className="error" />
									</div>
									<div className='modal-signin-for-inps'>
										<Field type="password" name="password" placeholder="Пароль" className="input-modal" />
										<ErrorMessage name="password" component="div" className="error" />
									</div>
									<div className='modal-signin-for-inps'>
										<Field type="password" name="confirmPassword" placeholder="Повторите пароль" className="input-modal" />
										<ErrorMessage name="confirmPassword" component="div" className="error" />
									</div>
								</div>
								<button type="submit" className='btn-for-next btn-for-next2 btn-for-next3'>Зарегистрироваться</button>
							</Form>
						)}
					</Formik>
				) : (
					<Formik
						initialValues={{ email: '', password: '' }}
						validationSchema={signInSchema}
						onSubmit={handleSignIn}
					>
						{() => (
							<Form className='modal-signin'>
								<h2>Авторизация</h2>
								<p onClick={() => setIsSignUp(true)}>Нет аккаунта?</p>
								<div className="modal-signin-for-inps-dop">
									<div className='modal-signin-for-inps'>
										<Field type="email" name="email" placeholder="Эл. почта" className="input-modal" />
										<ErrorMessage name="email" component="div" className="error" />
									</div>
									<div className='modal-signin-for-inps'>
										<Field type="password" name="password" placeholder="Пароль" className="input-modal" />
										<ErrorMessage name="password" component="div" className="error" />
									</div>
								</div>
								{signInError && <div className="error">{signInError}</div>}
								<button type="submit" className='btn-for-next btn-for-next2'>Войти</button>
							</Form>
						)}
					</Formik>
				)}
			</div>
		</div>
	);
}
