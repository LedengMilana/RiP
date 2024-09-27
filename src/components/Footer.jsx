import React from 'react'
import logo from "../assets/logo.svg"
import "../styles/Footer.css"

export default function Footer() {
	return (
		<>
			<div className="footer-cont">
				<div className="footer-cont-left">
					<img src={logo} alt="no img" />
					<p>LAIKA</p>
				</div>
				<p className='footer-cont-p'>
					Разработано <br />
					Леденгской М.А., <br />
					Писаревой В.
				</p>
			</div>
				
		</>
	)
}
