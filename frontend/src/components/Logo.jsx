import React from 'react'

const Logo = ({ size = 'text-2xl' }) => (
  <div className={`flex items-center gap-3 ${size} font-extrabold text-indigo-600`}> 
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="rounded-full bg-indigo-50 p-1">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#6366F1" />
    </svg>
    <span>ChatApp</span>
  </div>
)

export default Logo
