import Image from "next/image";
import styles from "./page.module.css";
import TranslationInput from '../components/TranslationInput';
import LanguageSelector from '../components/LanguageSelector';

export default function Home() {
  return (
    <div>
      <LanguageSelector />
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
