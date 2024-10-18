import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer';
import "../styles/Catalog.css"
import MainAddCompNext from '../components/MainAddCompNext';

export default function AddPostNext() {
	return (
		<>
			<div className="wrapper">
				<Header></Header>
				<MainAddCompNext></MainAddCompNext>
			</div>
			<hr />
			<div className="wrapper">
				<Footer></Footer>
			</div>
		</>
	)
}
