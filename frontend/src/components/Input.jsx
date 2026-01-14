import React from 'react'

const Input = ({ label, type = 'text', name, placeholder, value, onChange, autoComplete }) => {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-slate-200 mb-1">
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        className="w-full px-4 py-2 border border-slate-600 rounded-lg shadow-sm bg-slate-700/50 text-white placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
      />
    </div>
  )
}

export default Input
