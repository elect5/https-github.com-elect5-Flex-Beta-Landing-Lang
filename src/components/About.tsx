import React from 'react'
import { useTranslation } from 'react-i18next'

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">{t('about.title')}</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <img 
              src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
              alt="Electric car charging" 
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2">
            <p className="mb-4">{t('about.paragraph1')}</p>
            <p className="mb-4">{t('about.paragraph2')}</p>
            <p>{t('about.paragraph3')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About