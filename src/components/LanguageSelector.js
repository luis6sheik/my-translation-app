"use client";

import React from 'react';

const LanguageSelector = ({theOnChange}) => {

 	
 	return (
		
 		<select onChange={theOnChange} id="language">
 			<option value="">Select Language</option>
 			<option value="en">English</option>
 			<option value="es">Español</option>
 		</select>
 	);
};

export default LanguageSelector;