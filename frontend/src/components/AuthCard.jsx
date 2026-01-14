import React from 'react'

const AuthCard = ({ title, subtitle, children }) => {
  return (
    <div className="max-w-md w-full bg-slate-800/70 border border-slate-700 backdrop-blur-md rounded-2xl p-8 shadow-xl text-white">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        {subtitle && <p className="text-sm text-slate-300 mt-1">{subtitle}</p>}
      </div>
      {children}
    </div>
  )
}

export default AuthCard
