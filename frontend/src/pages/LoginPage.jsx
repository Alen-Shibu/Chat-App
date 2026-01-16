import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Input from '../components/Input'
import Button from '../components/Button'
import AuthCard from '../components/AuthCard'
import Logo from '../components/Logo'
import { useAuthStore } from '../store/useAuthStore'

function LoginPage() {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const {isLoggingIn,login} = useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault()
    login(formData)
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6 bg-linear-to-br from-slate-800 via-slate-900 to-indigo-900">
      <div className="w-full max-w-md">
        <AuthCard title={<div className="flex flex-col items-center"><Logo /><span className="mt-3 text-lg font-bold text-white">Welcome back</span></div>} subtitle="Sign in to continue">
          <form onSubmit={handleSubmit} className="mt-2">

            <Input label="Email address"
             placeholder="you@company.com"
              type="email" value={formData.email} 
              onChange={(e) => setFormData({...formData,email:e.target.value})}
               autoComplete="email" />
            <Input label="Password"
             placeholder="Your password" 
             type="password"
              value={formData.password} 
             onChange={(e) => setFormData({...formData,password:e.target.value})}
             autoComplete="current-password" />

            <Button disabled={isLoggingIn} type="submit">{isLoggingIn ? "Signing in..." : "Sign in"}</Button>

            <p className="text-center text-sm text-slate-300 mt-4">Don’t have an account? <Link to="/signup" className="text-indigo-400 font-medium">Sign up</Link></p>
          </form>
        </AuthCard>
      </div>
    </div>
  )
}

export default LoginPage