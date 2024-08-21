"use client";

import React from 'react';

const LanguageSelector = () => {

 	const handleLanguageChange = (event) => {
 		const selectedLanguage = event.target.value;
 		localStorage.setItem('language', selectedLanguage);
 		window.location.reload();
 	};
 	return (
		
 		<select onChange={handleLanguageChange}>
 			<option value="en">English</option>
 			<option value="es">Español</option>
 		</select>
 	);
};

export default LanguageSelector;