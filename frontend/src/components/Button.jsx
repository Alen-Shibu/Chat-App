import React from 'react'

const Button = ({ children, type = 'button', className = '' }) => {
  return (
    <button
      type={type}
      className={`w-full inline-flex items-center justify-center gap-2 py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
