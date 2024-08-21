"use client"; 

import Image from "next/image";
import styles from "./page.module.css";
import TranslationInput from '../components/TranslationInput';
import LanguageSelector from '../components/LanguageSelector';

export default function Home() {


  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;

    if (selectedLanguage != '') {

      localStorage.setItem('language', selectedLanguage);
      
      fetch(`/translations/${selectedLanguage}.json`)
      .then(response => response.json())
      .then(data => {
        const elementsToTranslate = document.querySelectorAll('[data-translate-key]');
        elementsToTranslate.forEach(element => {

          const key = element.getAttribute('data-translate-key');
          if (data[key]) {
            if (element.tagName.toLowerCase() === 'input' && element.hasAttribute('placeholder')) {
              element.setAttribute('placeholder', data[key]);
            }
          }
        });
        //if (data[dataTranslateKey]) {
          //setPlaceholder(data[dataTranslateKey]);
          
        //}
      });

    }
  };

  return (
    <div>
      <LanguageSelector
        theOnChange={handleLanguageChange}
      />
      <div className="input-container">
        <TranslationInput 
          id="nombre" 
          type="text"
          dataTranslateKey="full_name_field" 
        />
        <TranslationInput 
          id="email" 
          type="text"
          dataTranslateKey="email_field" 
        />
      </div>
    </div>
  )
}
