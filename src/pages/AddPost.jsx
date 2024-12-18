import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer';
import "../styles/Catalog.css"
import MainAddComp from '../components/MainAddComp';

export default function AddPost() {
	return (
		<>
			<div className="wrapper">
				<Header></Header>
				<MainAddComp></MainAddComp>
			</div>
			<hr />
			<div className="wrapper">
				<Footer></Footer>
			</div>
		</>
	)
}
