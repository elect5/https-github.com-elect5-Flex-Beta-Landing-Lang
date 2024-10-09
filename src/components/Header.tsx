import React from 'react'
import { Link } from 'react-router-dom'
import { Zap } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <header className="bg-gradient-animate text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Zap className="mr-2 animate-pulse" />
          <span className="text-xl font-bold">Voltia Flex</span>
        </div>
        <nav className="flex items-center">
          <ul className="flex space-x-4 mr-4">
            <li><a href="#features" className="hover:text-purple-200 transition duration-300">{t('header.features')}</a></li>
            <li><a href="#how-it-works" className="hover:text-purple-200 transition duration-300">{t('header.howItWorks')}</a></li>
            <li><a href="#about" className="hover:text-purple-200 transition duration-300">{t('header.about')}</a></li>
            <li><a href="#contact" className="hover:text-purple-200 transition duration-300">{t('header.contact')}</a></li>
            <li><Link to="/register" className="hover:text-purple-200 transition duration-300">{t('header.join')}</Link></li>
          </ul>
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  )
}

export default Header