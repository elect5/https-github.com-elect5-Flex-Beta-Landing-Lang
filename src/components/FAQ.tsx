import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "How does Voltia Flex work?",
      answer: "Voltia Flex uses advanced over-the-air technology to communicate with your electric vehicle. It optimizes your charging schedule to use sustainable energy sources and take advantage of off-peak electricity rates, all while ensuring your car is charged when you need it."
    },
    {
      question: "Do I need any special hardware?",
      answer: "No, Voltia Flex is a software-based solution that works with your existing EV charging setup. There's no need for additional hardware installation."
    },
    {
      question: "How do I earn cashback rewards?",
      answer: "By participating in smart charging sessions with Voltia Flex, you contribute to grid stability and sustainable energy usage. We reward this contribution with cashback incentives, which are calculated based on your charging patterns and energy market conditions."
    },
    {
      question: "Is Voltia Flex compatible with my EV?",
      answer: "Voltia Flex is compatible with most modern electric vehicles. Check our website for a full list of supported models or contact our support team for more information."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="flex items-center text-purple-600 mb-6 hover:text-purple-700">
          <ArrowLeft className="mr-2" />
          Back to Home
        </Link>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h1>
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">{faq.question}</h3>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                <p className="text-sm text-gray-500">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link 
            to="/register"
            className="bg-purple-600 text-white py-3 px-8 rounded-full font-bold hover:bg-purple-700 transition duration-300 inline-block"
          >
            Join Our Beta Program
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FAQ