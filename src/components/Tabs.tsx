import React, { useState } from 'react';
import { motion } from 'framer-motion';

// styles
import './Tabs.css'

// tabs
import AboutMe from './tabs/AboutMe';
import Skills from './tabs/Skills';
import Experience from './tabs/Experience';
import Education from './tabs/Education';

const Tabs = () => {
	const [activeTab, setActiveTab] = useState('AboutMe');

const renderContent = () => {
	switch (activeTab) {
		case 'AboutMe':
			return <AboutMe />;
		case 'Skills':
			return <Skills />;
		case 'Experience':
			return <Experience />;
		case 'Education':
			return <Education />;
		default:
			return <AboutMe />;
	}
};
	return (
		<div>
			<div className="tabs">
				<motion.button
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.95 }}
				whileDrag={{ scale: 0.9, rotate: 10 }}
				drag 
				onClick={() => setActiveTab('AboutMe')}>O mne</motion.button>
				<motion.button
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.95 }}
				whileDrag={{ scale: 0.9, rotate: 10 }}
				drag 
				onClick={() => setActiveTab('Skills')}>Zručnosti</motion.button>
				<motion.button
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.95 }}
				whileDrag={{ scale: 0.9, rotate: 10 }}
				drag 
				onClick={() => setActiveTab('Experience')}>Skúsenosti</motion.button>
				<motion.button
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.95 }}
				whileDrag={{ scale: 0.9, rotate: 10 }}
				drag 
				onClick={() => setActiveTab('Education')}>Vzdelanie</motion.button>
			</div>
			<motion.div
				key={activeTab}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.5 }}
				className='content'
			>
				{renderContent()}	
			</motion.div>
		</div>
	);
};

export default Tabs;