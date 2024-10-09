import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="relative bg-gradient-to-br from-purple-900 via-red-700 to-orange-500 text-white py-16 overflow-hidden">
      <div className="container mx-auto relative z-20 flex items-center">
        <div className="w-full md:w-3/5 pr-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 shadow-text">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 shadow-text">
            {t('hero.subtitle')}
          </p>
          <div className="space-x-4">
            <Link 
              to="/register"
              className="bg-white text-purple-700 py-3 px-8 rounded-full font-bold hover:bg-purple-100 transition duration-300 transform hover:scale-105 inline-block"
            >
              {t('hero.getStarted')}
            </Link>
            <a 
              href="#features"
              className="bg-purple-600 text-white py-3 px-8 rounded-full font-bold hover:bg-purple-700 transition duration-300 transform hover:scale-105 inline-block"
            >
              {t('hero.learnMore')}
            </a>
          </div>
        </div>
      </div>
      <div 
        className="absolute top-0 right-0 bottom-0 w-full md:w-2/5 bg-cover bg-right z-10"
        style={{ backgroundImage: "url('https://energy.voltia.com/assets/shh.png')" }}
      ></div>
    </div>
  )
}

export default Hero