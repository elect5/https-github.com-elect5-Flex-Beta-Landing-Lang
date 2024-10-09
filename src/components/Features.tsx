import React from 'react'
import { DollarSign, Leaf, Clock, Cpu } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Features: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <DollarSign className="w-12 h-12 text-purple-500" />,
      title: t('features.earnMoney.title'),
      description: t('features.earnMoney.description')
    },
    {
      icon: <Leaf className="w-12 h-12 text-green-500" />,
      title: t('features.savePlanet.title'),
      description: t('features.savePlanet.description')
    },
    {
      icon: <Clock className="w-12 h-12 text-blue-500" />,
      title: t('features.offPeakCharging.title'),
      description: t('features.offPeakCharging.description')
    },
    {
      icon: <Cpu className="w-12 h-12 text-red-500" />,
      title: t('features.softwareBased.title'),
      description: t('features.softwareBased.description')
    }
  ]

  return (
    <section id="features" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">{t('features.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features