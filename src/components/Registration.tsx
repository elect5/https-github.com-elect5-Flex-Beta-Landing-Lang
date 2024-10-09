import React, { useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import Select from 'react-select'
import { useTranslation } from 'react-i18next'

const Registration: React.FC = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    evBrand: null,
    evModel: '',
    evBattery: '',
    evYear: '',
    energySupplier: '',
    address: '',
    phone: '',
    email: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const evBrands = [
    { value: 'tesla', label: 'Tesla' },
    { value: 'nissan', label: 'Nissan' },
    { value: 'chevrolet', label: 'Chevrolet' },
    { value: 'bmw', label: 'BMW' },
    { value: 'volkswagen', label: 'Volkswagen' },
    { value: 'ford', label: 'Ford' },
    { value: 'hyundai', label: 'Hyundai' },
    { value: 'kia', label: 'Kia' },
    { value: 'audi', label: 'Audi' },
    { value: 'jaguar', label: 'Jaguar' },
    { value: 'porsche', label: 'Porsche' },
    { value: 'mercedes', label: 'Mercedes-Benz' },
    { value: 'volvo', label: 'Volvo' },
    { value: 'polestar', label: 'Polestar' },
    { value: 'rivian', label: 'Rivian' },
    { value: 'lucid', label: 'Lucid' },
    { value: 'mini', label: 'Mini' },
    { value: 'fiat', label: 'Fiat' },
    { value: 'honda', label: 'Honda' },
    { value: 'toyota', label: 'Toyota' },
  ].sort((a, b) => a.label.localeCompare(b.label))

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSelectChange = (selectedOption: any, actionMeta: any) => {
    setFormData(prevState => ({
      ...prevState,
      [actionMeta.name]: selectedOption
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')

    const formDataToSend = {
      ...formData,
      evBrand: formData.evBrand ? formData.evBrand.value : ''
    }

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbzikdqgZdIRvPRYxIh21b-5OYZz8x5zvwWdYXnkNtQEIiNvYEWX-mvQSIJwCvPq4FMY/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataToSend)
      })

      setSubmitSuccess(true)
      setFormData({
        firstName: '',
        lastName: '',
        evBrand: null,
        evModel: '',
        evBattery: '',
        evYear: '',
        energySupplier: '',
        address: '',
        phone: '',
        email: '',
      })
    } catch (error) {
      setSubmitError(t('registration.submitError'))
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-red-700 to-orange-500 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="px-6 py-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('registration.thankYou')}</h2>
            <p className="text-gray-600 mb-6">{t('registration.confirmation')}</p>
            <Link to="/" className="inline-block bg-purple-600 text-white py-2 px-4 rounded-md font-bold hover:bg-purple-700 transition duration-300">
              {t('registration.returnHome')}
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-red-700 to-orange-500 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="px-6 py-8">
          <Link to="/" className="flex items-center text-purple-600 mb-6 hover:text-purple-700">
            <ArrowLeft className="mr-2" />
            {t('registration.backToHome')}
          </Link>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('registration.title')}</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">{t('registration.firstName')}</label>
                <input type="text" id="firstName" name="firstName" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500" onChange={handleChange} value={formData.firstName} />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">{t('registration.lastName')}</label>
                <input type="text" id="lastName" name="lastName" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500" onChange={handleChange} value={formData.lastName} />
              </div>
            </div>
            <div>
              <label htmlFor="evBrand" className="block text-sm font-medium text-gray-700">{t('registration.evBrand')}</label>
              <Select
                id="evBrand"
                name="evBrand"
                options={evBrands}
                className="mt-1"
                classNamePrefix="select"
                placeholder={t('registration.selectEvBrand')}
                isClearable
                isSearchable
                onChange={handleSelectChange}
                value={formData.evBrand}
              />
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div>
                <label htmlFor="evModel" className="block text-sm font-medium text-gray-700">{t('registration.evModel')}</label>
                <input type="text" id="evModel" name="evModel" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500" onChange={handleChange} value={formData.evModel} />
              </div>
              <div>
                <label htmlFor="evBattery" className="block text-sm font-medium text-gray-700">{t('registration.evBattery')}</label>
                <input type="number" id="evBattery" name="evBattery" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500" onChange={handleChange} value={formData.evBattery} />
              </div>
              <div>
                <label htmlFor="evYear" className="block text-sm font-medium text-gray-700">{t('registration.evYear')}</label>
                <input type="number" id="evYear" name="evYear" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500" onChange={handleChange} value={formData.evYear} />
              </div>
            </div>
            <div>
              <label htmlFor="energySupplier" className="block text-sm font-medium text-gray-700">{t('registration.energySupplier')}</label>
              <input type="text" id="energySupplier" name="energySupplier" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500" onChange={handleChange} value={formData.energySupplier} />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">{t('registration.address')}</label>
              <input type="text" id="address" name="address" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500" onChange={handleChange} value={formData.address} />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">{t('registration.phone')}</label>
              <input type="tel" id="phone" name="phone" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500" onChange={handleChange} value={formData.phone} />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">{t('registration.email')}</label>
              <input type="email" id="email" name="email" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500" onChange={handleChange} value={formData.email} />
            </div>
            {submitError && (
              <div className="text-red-600 text-sm">{submitError}</div>
            )}
            <div>
              <button type="submit" disabled={isSubmitting} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed">
                {isSubmitting ? t('registration.submitting') : t('registration.submit')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Registration