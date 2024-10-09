import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'sk', label: 'SK' },
    { code: 'pl', label: 'PL' },
    { code: 'cs', label: 'CS' },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-sm hover:text-purple-200 transition duration-300"
      >
        {languages.find(lang => lang.code === i18n.language)?.label || 'EN'}
        <ChevronDown className="ml-1 w-4 h-4" />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-24 bg-white rounded-md shadow-xl z-20">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;