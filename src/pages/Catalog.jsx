import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer';
import MainCompCatalog from '../components/MainCompCatalog';
import "../styles/Catalog.css"

export default function Catalog() {
	return (
		<>
			<div className="wrapper">
				<Header></Header>
				<MainCompCatalog></MainCompCatalog>
			</div>
			<hr />
			<div className="wrapper">
				<Footer></Footer>
			</div>
		</>
	)
}
