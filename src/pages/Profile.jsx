import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer';
import MainCompProfile from '../components/MainCompProfile';

export default function Profile() {
	return (
		<>
			<div className="wrapper">
				<Header></Header>
				<MainCompProfile></MainCompProfile>
			</div>
			<hr />
			<div className="wrapper">
				<Footer></Footer>
			</div>
		</>
	)
}
