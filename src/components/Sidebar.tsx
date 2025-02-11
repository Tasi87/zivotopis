import React from 'react';
import profilePhoto from '../assets/Profilovka - kópia.jpg'

// styles
import './Sidebar.css'

const SideBar: React.FC = () => {
	return (
		<div className="sidebar">
			<img src={profilePhoto} alt="Profil" className='profile-photo' />
			<h2>Kontaktné údaje</h2>
			<ul>
				<li>Email: <a href="mailto:tasi87@gmail.com">tasi87@gmail.com</a></li>
				<li>Telefón: <a href="tel:+421911148320">+421 911 148 320</a></li>
				<li>
					<address>
						Prievozská 11, <br/>
						821 09 <br/>
						Bratislava II <br/>
						Slovenská republika
					</address>
				</li>
			</ul>
			<h2>Jazyky</h2>
			<ul>
				<li><b>Anglický jazyk</b></li>
				<p>Mierne pokročilý B1</p>
				<li><b>Nemecký jazyk</b></li>
				<p>Začiatočník A2</p>
			</ul>
			<h2>Vodičský preukaz</h2>
			<ul>
				<li>B</li>
			</ul>
		</div>
	)
}
export default SideBar