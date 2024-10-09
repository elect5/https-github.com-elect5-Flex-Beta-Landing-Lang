import React, { useState } from 'react'
import { X } from 'lucide-react'

interface SignInModalProps {
  isOpen: boolean
  onClose: () => void
}

const SignInModal: React.FC<SignInModalProps> = ({ isOpen, onClose }) => {
  const [isSignIn, setIsSignIn] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the sign-in or sign-up logic
    console.log(isSignIn ? 'Signing in' : 'Signing up', { email, password })
    // Reset form and close modal
    setEmail('')
    setPassword('')
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-purple-600">
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 px-4 rounded-md font-bold hover:bg-purple-700 transition duration-300"
          >
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          {isSignIn ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={() => setIsSignIn(!isSignIn)}
            className="ml-1 text-purple-600 font-bold hover:underline"
          >
            {isSignIn ? 'Sign Up' : 'Sign In'}
          </button>
        </p>
      </div>
    </div>
  )
}

export default SignInModal