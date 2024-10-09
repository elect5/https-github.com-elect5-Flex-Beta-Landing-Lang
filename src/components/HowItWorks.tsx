import React from 'react'
import { Zap, Cloud, DollarSign } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const HowItWorks: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">{t('howItWorks.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-purple-100 p-6 rounded-lg shadow-md text-center">
            <Cloud className="w-16 h-16 text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">{t('howItWorks.otaTechnology.title')}</h3>
            <p>{t('howItWorks.otaTechnology.description')}</p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg shadow-md text-center">
            <Zap className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">{t('howItWorks.sustainableEnergy.title')}</h3>
            <p>{t('howItWorks.sustainableEnergy.description')}</p>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg shadow-md text-center">
            <DollarSign className="w-16 h-16 text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">{t('howItWorks.financialRewards.title')}</h3>
            <p>{t('howItWorks.financialRewards.description')}</p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg mb-4">
            {t('howItWorks.description')}
          </p>
          <Link 
            to="/register"
            className="bg-purple-600 text-white py-3 px-8 rounded-full font-bold hover:bg-purple-700 transition duration-300 transform hover:scale-105 inline-block"
          >
            {t('howItWorks.registerBeta')}
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks