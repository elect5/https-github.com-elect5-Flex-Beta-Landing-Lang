import React from 'react'
import { Mail, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer id="contact" className="bg-purple-600 text-white py-8">
      <div className="container mx-auto text-center">
        <h3 className="text-2xl font-bold mb-4">{t('footer.title')}</h3>
        <p className="mb-4">{t('footer.description')}</p>
        <div className="flex justify-center items-center space-x-4 mb-4">
          <a href="mailto:support@voltia.com" className="flex items-center hover:text-purple-200">
            <Mail className="mr-2" /> {t('footer.email')}
          </a>
          <a href="https://www.linkedin.com/company/voltia" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-purple-200">
            <Linkedin className="mr-2" /> {t('footer.linkedin')}
          </a>
        </div>
        <p className="mb-4">{t('footer.faq')} <Link to="/faq" className="underline hover:text-purple-200">FAQ</Link>.</p>
        <Link 
          to="/register"
          className="bg-white text-purple-600 py-2 px-6 rounded-full font-bold hover:bg-purple-100 transition duration-300 inline-block"
        >
          {t('footer.joinBeta')}
        </Link>
      </div>
    </footer>
  )
}

export default Footer